from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.agents import Tool, AgentExecutor, BaseMultiActionAgent
from langchain.memory import ConversationBufferMemory

import streamlit as st

import random

random.seed(42)

from constants import TEXTBOOK_QUESTIONS, TEXTBOOK_ANSWERS, WELCOME_MESSAGE, EVALUATOR_PROMPT, MANAGER_PROMPT, TEACHER_PROMPT
from utils import get_random_idx, ExtendedConversationBufferMemory

openai_api_key = st.secrets['OPENAI_API_KEY']

curr_ques_idx = None
to_exit = False


# index_gen = get_random_idx(len(TEXTBOOK_QUESTIONS))

# Create LLMChain
evaluator = OpenAI(model_name = 'gpt-4', temperature=0, openai_api_key=openai_api_key)
teacher = OpenAI(model_name = 'gpt-4', temperature=0, openai_api_key=openai_api_key)

evaluator_template = PromptTemplate.from_template(EVALUATOR_PROMPT)
teacher_template = PromptTemplate(input_variables=["question", "correct_answer", "student_answer", "grader_feedback", "chat_history", "student_response"], template = TEACHER_PROMPT)

evaluator_chain = LLMChain(llm=evaluator, prompt=evaluator_template)

with st.sidebar:
    if prompt := st.text_input("Index of question", key="question_index", type="default"):
        curr_ques_idx = int(prompt)

        if "curr_ques_idx" not in st.session_state or st.session_state["curr_ques_idx"] != curr_ques_idx:
            st.session_state["curr_ques_idx"] = curr_ques_idx
            st.session_state["question"] = TEXTBOOK_QUESTIONS[curr_ques_idx]
            st.session_state["correct_answer"] = TEXTBOOK_ANSWERS[curr_ques_idx]

            st.session_state["messages"] = [{"role": "assistant", "content": st.session_state["question"]}]
            st.session_state["eval_mode"] = True

            teacher_memory = ExtendedConversationBufferMemory(memory_key="chat_history", extra_variables=["question", "correct_answer", "student_answer", "grader_feedback"], human_prefix="Student", ai_prefix="Tutor")
            st.session_state["teacher_chain"] = LLMChain(llm=evaluator, prompt=teacher_template, memory=teacher_memory, verbose=True)

st.title("NANO 11: Chapter Evaluation and Explanation")
if "messages" not in st.session_state:
    st.session_state["messages"] = [{"role": "assistant", "content": WELCOME_MESSAGE}]

for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

if prompt := st.chat_input():
    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    if st.session_state["eval_mode"]:
        print("IN EVAL MODE")
        question = st.session_state["question"]
        correct_answer = st.session_state["correct_answer"]
        st.session_state["student_answer"] = prompt

        issues = evaluator_chain({"question": question, "correct_answer": correct_answer, "student_answer": prompt})
        
        st.session_state["grader_feedback"] = issues['text']

        msg = {"role": "assistant" , "content": issues['text']}
        st.session_state.messages.append(msg)
        st.chat_message("assistant").write(msg["content"])
        st.chat_message("C").write(st.session_state["correct_answer"])

        st.session_state['feedback'] = issues['text']
        st.session_state["eval_mode"] = False
        print(st.session_state["eval_mode"])
        prompt = "Let's review"

    print("IN TEACHER MODE")
    teacher_chain = st.session_state["teacher_chain"]
    question = st.session_state["question"]
    correct_answer = st.session_state["correct_answer"]
    student_answer = st.session_state["student_answer"]
    grader_feedback = st.session_state["grader_feedback"]

    response = teacher_chain({"question": question, "correct_answer": correct_answer, "student_answer": student_answer, "grader_feedback": grader_feedback, "student_response": prompt})
    msg = {"role": "assistant" , "content": response['text']}
    st.session_state.messages.append(msg)
    st.chat_message("assistant").write(msg["content"])
