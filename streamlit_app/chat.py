from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.agents import Tool, AgentExecutor, BaseMultiActionAgent
from langchain.memory import ConversationBufferMemory

import streamlit as st

import random
import logging

random.seed(42)

from constants import TEXTBOOK_QUESTIONS, TEXTBOOK_ANSWERS
from prompts import get_welcome_message, get_evaluator_prompt, get_manager_prompt, get_teacher_prompt
from utils import get_random_idx
from agents import GenericAgent

openai_api_key = st.secrets['OPENAI_API_KEY']

curr_ques_idx = None
to_exit = False
mode = "session"


WELCOME_MESSAGE = get_welcome_message()

# Create LLMChain

def exit():
    st.chat_message("assistant").write("Goodbye!")

def get_teacher():
    st.chat_message('I').write("Teacher Called")
    question = st.session_state["question"]
    correct_answer = st.session_state["correct_answer"]
    student_answer = st.session_state["student_answer"]

    st.session_state["mode"] = "teacher"

    evaluator_prompt = get_evaluator_prompt(question = question, correct_answer = correct_answer, student_answer = student_answer)

    evaluator = GenericAgent('gpt-3.5-turbo', evaluator_prompt, openai_api_key)

    grader_feedback = evaluator("Give a list of the errors:")['content']

    st.chat_message("E").write(grader_feedback)
    st.chat_message("C").write(correct_answer)

    st.session_state["messages"].append({"role": "E", "content": grader_feedback})
    st.session_state["messages"].append({"role": "C", "content": correct_answer})

    teacher_functions = [
        {
            "name": "get_manager",
            "description": "Student is done",
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
    st.chat_message("assistant").write(first_response['content'])


def get_manager():
    print("MANAGER CALLED")
    st.session_state["mode"] = "manager"
    curr_ques_idx = next(st.session_state["index_gen"])
    print(curr_ques_idx)

    st.session_state["question"] = TEXTBOOK_QUESTIONS[curr_ques_idx]
    st.session_state["correct_answer"] = TEXTBOOK_ANSWERS[curr_ques_idx]

    st.session_state["messages"] = [{"role": "assistant", "content": WELCOME_MESSAGE}, {"role": "assistant", "content": st.session_state["question"]}]

    manager_prompt = get_manager_prompt(question = st.session_state["question"])

    manager_functions = [
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
    manager = GenericAgent('gpt-4', manager_prompt, openai_api_key, functions = manager_functions)

    st.session_state["manager"] = manager

    for msg in st.session_state.messages:
        st.chat_message(msg["role"]).write(msg["content"])



st.title("NANO 11: Chapter 2 Review")
if "messages" not in st.session_state:
    st.session_state["index_gen"] = get_random_idx(len(TEXTBOOK_QUESTIONS))
    get_manager()

if prompt := st.chat_input():
    print(len(st.session_state.messages))
    for msg in st.session_state.messages:
        st.chat_message(msg["role"]).write(msg["content"])

    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    if st.session_state["mode"] == "manager":
        response = st.session_state["manager"](prompt)

        if 'function_call' in response:
            function_name = response['function_call']['name']

            if function_name == 'get_teacher':
                st.session_state['student_answer'] = prompt
                get_teacher()
            elif function_name == 'exit':
                exit()
        else:
            st.session_state.messages.append(response)
            st.chat_message("assistant").write(response['content'])

    else:
        response = st.session_state["teacher"](prompt)

        if 'function_call' in response:
            function_name = response['function_call']['name']
            print(function_name)
            if function_name == 'get_manager':
                get_manager()
            elif function_name == 'exit':
                exit()
        else:
            st.session_state.messages.append(response)
            st.chat_message("assistant").write(response['content'])