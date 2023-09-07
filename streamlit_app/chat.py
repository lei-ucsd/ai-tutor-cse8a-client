import streamlit as st

import random
import logging

from constants import TEXTBOOK_QUESTIONS, TEXTBOOK_ANSWERS
from prompts import get_welcome_message, get_evaluator_prompt, get_proctor_prompt, get_teacher_prompt
from utils import get_random_idx
from agents import GenericAgent

import uuid
import json
import time
import datetime
import os

import logging

openai_api_key = st.secrets['OPENAI_API_KEY']

curr_ques_idx = None
to_exit = False
mode = "session"

WELCOME_MESSAGE = get_welcome_message()

# Create LLMChain

def exit(reason=None):
    goodbye_message = f"{reason}\n. If you would like to try again, please refresh the browser" if reason else "Goodbye! If you would like to try again, please refresh the browser"
    st.chat_message("assistant").write(goodbye_message)

def get_teacher():
    # st.chat_message('I').write("Teacher Called")
    st.session_state["logger"].info(f"System: Teacher Called")
    question = st.session_state["question"]
    correct_answer = st.session_state["correct_answer"]
    student_answer = st.session_state["student_answer"]

    st.session_state["mode"] = "teacher"

    evaluator_prompt = get_evaluator_prompt(question = question, correct_answer = correct_answer, student_answer = student_answer)

    evaluator = GenericAgent('gpt-4', evaluator_prompt, openai_api_key)

    grader_feedback = evaluator("Give a list of the errors, If there are no major errors simply say No Errors:")['content']

    # st.chat_message("E").write(grader_feedback)
    # st.chat_message("C").write(correct_answer)
    st.session_state["logger"].info(f"Grader: {grader_feedback}")
    st.session_state["logger"].info(f"CorrectAnswer: {correct_answer}")

    # st.session_state["messages"].append({"role": "E", "content": grader_feedback})
    # st.session_state["messages"].append({"role": "C", "content": correct_answer})

    teacher_functions = [
        {
            "name": "get_proctor",
            "description": "Student wants to move on to the next question",
            "parameters": {"type": "object", "properties": {}}
        },
        {
            "name": "exit",
            "description": "Ends the student interaction",
            "parameters": {"type": "object", "properties": {}}
        }
    ]

    teacher_prompt = get_teacher_prompt(question = question, correct_answer = correct_answer, student_answer = student_answer, grader_feedback = grader_feedback)
    teacher = GenericAgent('gpt-4', teacher_prompt, openai_api_key, functions = teacher_functions)

    first_response = teacher("Execute <Lesson>")

    st.session_state["teacher"] = teacher

    st.session_state["messages"].append(first_response)
    st.session_state["logger"].info(f"Teacher: {first_response['content']}")
    st.chat_message("assistant").write(first_response['content'])


def get_proctor():

    st.session_state["mode"] = "proctor"
    try:
        curr_ques_idx = next(st.session_state["index_gen"])
        st.session_state["question"] = TEXTBOOK_QUESTIONS[curr_ques_idx]
        st.session_state["correct_answer"] = TEXTBOOK_ANSWERS[curr_ques_idx]

        st.session_state["messages"] = [{"role": "assistant", "content": st.session_state["question"]}]

        proctor_prompt = get_proctor_prompt(question = st.session_state["question"])

        proctor_functions = [
            {
                "name": "get_teacher",
                "description": "Calls the teacher to evaluate a student's answer",
                "parameters": {"type": "object", "properties": {}}
            },
            {
                "name": "exit",
                "description": "Ends the student interaction",
                "parameters": {"type": "object", "properties": {}}
            }
        ]
        proctor = GenericAgent('gpt-4', proctor_prompt, openai_api_key, functions = proctor_functions)

        st.session_state["proctor"] = proctor

        for msg in st.session_state.messages:
            st.chat_message(msg["role"]).write(msg["content"])
            st.session_state["logger"].info(f"{msg['role']}: {msg['content']}")
    except:
        exit("We completed all questions!")

def enable():
    st.session_state["disabled"] = False

def disable():
    st.session_state["disabled"] = True

def init_session():
    st.session_state["index_gen"] = get_random_idx(len(TEXTBOOK_QUESTIONS))

    # Step 2: Get current date
    current_date = datetime.datetime.now().strftime("%Y-%m-%d")

    directory = f"logs/{current_date}"
    os.makedirs(directory, exist_ok=True)

    # Step 3: Create a file
    uid = uuid.uuid4()
    file_name = f'{directory}/{uid}.log'

    st.session_state["logger"] = logging.getLogger(f'Logger{uid}')
    st.session_state["logger"].setLevel(logging.INFO)

    file_handler = logging.FileHandler(file_name)
    file_handler.setLevel(logging.INFO)

    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    file_handler.setFormatter(formatter)

    st.session_state["logger"].addHandler(file_handler)

    get_proctor()

def main():
    st.title("NANO 11: Chapter 2 Review")
    if st.sidebar.button("Skip Question"):
        get_proctor()

    with st.sidebar:
        with st.expander("Instructions", expanded=True):
            st.markdown(WELCOME_MESSAGE)

    if "messages" not in st.session_state or not st.session_state["messages"]:
        init_session()

    if prompt := st.chat_input("Input your response"):
        got_response = False
        with st.spinner("Please wait for the assitant's reply"):
            for msg in st.session_state.messages:
                st.chat_message(msg["role"]).write(msg["content"])

            st.session_state["logger"].info(f"User: {prompt}")
            st.session_state.messages.append({"role": "user", "content": prompt})
            st.chat_message("user").write(prompt)

            if st.session_state["mode"] == "proctor":
                while not got_response:
                    try:
                        response = st.session_state["proctor"](prompt)
                        got_response = True

                        if 'function_call' in response:
                            function_name = response['function_call']['name']

                            if function_name == 'get_teacher':
                                st.session_state['student_answer'] = prompt
                                get_teacher()
                            elif function_name == 'exit':
                                exit()
                        else:
                            st.session_state.messages.append(response)
                            st.session_state["logger"].info(f"Proctor: {response['content']}")
                            st.chat_message("assistant").write(response['content'])
                        
                    except Exception as err:
                        # st.chat_message("I").write(f"Something horrible happened:( Please refresh your browser.")
                        st.session_state["logger"].error({"role": "Error", "content": str(err)})
                        exit("Something horrible happened:(")

            else:
                while not got_response:
                    try:
                        response = st.session_state["teacher"](prompt)
                        got_response = True

                        if 'function_call' in response:
                            function_name = response['function_call']['name']
                            if function_name == 'get_proctor':
                                get_proctor()
                            elif function_name == 'exit':
                                exit()
                        else:
                            st.session_state.messages.append(response)
                            st.session_state["logger"].info(f"Teacher: {response['content']}")
                            st.chat_message("assistant").write(response['content'])

                        
                    except Exception as err:
                        # st.chat_message("I").write(f"Something horrible happened:( Please refresh your browser.")
                        st.session_state["logger"].error({"role": "Error", "content": str(err)})
                        exit("Something horrible happened:(")

                


# st.session_state["authenticated"] = False
if password := st.text_input("Enter Password", key="user_password", type="password"):
    if password == st.secrets["password"]:
        main()
    else:
        st.session_state["messages"] = None
        st.session_state["logger"] = None