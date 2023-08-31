from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate
from langchain.agents import Tool, AgentExecutor, BaseMultiActionAgent
from langchain.memory import ConversationBufferMemory

import streamlit as st

import random

random.seed(42)

from constants import TEXTBOOK_QUESTIONS, TEXTBOOK_ANSWERS, WELCOME_MESSAGE, EVALUATOR_PROMPT, MANAGER_PROMPT, TEACHER_PROMPT
from utils import get_random_idx

openai_api_key = st.secrets['OPENAI_API_KEY']

curr_ques_idx = None
to_exit = False
mode = "session"

index_gen = get_random_idx(len(TEXTBOOK_QUESTIONS))

# Create LLMChain
evaluator = OpenAI(model_name = 'gpt-4', temperature=0, openai_api_key=openai_api_key)
teacher = OpenAI(model_name = 'gpt-4', temperature=0, openai_api_key=openai_api_key)
manager = OpenAI(model_name = 'gpt-4', temperature=0, openai_api_key=openai_api_key)

evaluator_template = PromptTemplate.from_template(EVALUATOR_PROMPT)
teacher_template = PromptTemplate.from_template(TEACHER_PROMPT)
manager_template = PromptTemplate.from_template(MANAGER_PROMPT)

evaluator_memory = ConversationBufferMemory(memory_key="chat_history")
evaluator_chain = LLMChain(llm=evaluator, prompt=evaluator_template)

teacher_memory = ConversationBufferMemory(memory_key="chat_history")
teacher_chain = LLMChain(llm=evaluator, prompt=teacher_template)

manager_memory = ConversationBufferMemory(memory_key="chat_history")
manager_chain = LLMChain(llm=evaluator, prompt=manager_template)

# def switch_mode():

# def exit_mode():

def get_teacher():
	question = st.session_state["question"]
	correct_answer = st.session_state["answer"]
	student_answer = st.session_state["student_answer"]

	st.session_state["mode"] = "teacher"


def get_session_manager():
	st.session_state["mode"] = "manager"
	curr_ques_idx = next(index_gen)

	st.session_state["question"] = TEXTBOOK_QUESTIONS[curr_ques_idx]
    st.session_state["answer"] = TEXTBOOK_ANSWERS[curr_ques_idx]

    st.session_state["messages"] = [{"role": "assistant", "content": st.session_state["question"]}


st.title("NANO 11: Chapter 2 Review")
if "messages" not in st.session_state:
    st.session_state["messages"] = [{"role": "assistant", "content": WELCOME_MESSAGE}]

for msg in st.session_state.messages:
    st.chat_message(msg["role"]).write(msg["content"])

if prompt := st.chat_input():
    st.session_state.messages.append({"role": "user", "content": prompt})
    st.chat_message("user").write(prompt)

    issues = evaluator_chain({"question": st.session_state["question"], "correct_answer": st.session_state["answer"], "student_answer": prompt})


    msg = {"role": "assistant" , "content": issues['text']}
    st.session_state.messages.append(msg)
    st.chat_message("assistant").write(msg["content"])
    st.chat_message("CA").write(st.session_state["answer"])