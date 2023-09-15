import streamlit as st

from constants import WELCOME_MESSAGE
from session import init_session, get_proctor, get_teacher, exit

def main():
    st.title("NANO 11: Chapter 2 Review")
    if st.sidebar.button("Skip Question"):
        get_proctor(st)

    with st.sidebar:
        with st.expander("Instructions", expanded=True):
            st.markdown(WELCOME_MESSAGE)

    if "messages" not in st.session_state or not st.session_state["messages"]:
        init_session(st)

    if prompt := st.chat_input("Input your response"):
        for msg in st.session_state.messages:
            st.chat_message(msg["role"]).write(msg["content"])

        st.session_state["logger"].info(f"User: {prompt}")
        st.session_state.messages.append({"role": "user", "content": prompt})
        st.chat_message("user").write(prompt)

        if st.session_state["mode"] == "proctor":
            response = st.session_state["proctor"](prompt, st)
                    
            if 'function_call' in response:
                function_name = response['function_call']['name']

                if function_name == 'get_teacher':
                    st.session_state['student_answer'] = prompt
                    get_teacher(st)
                elif function_name == 'exit':
                    exit(st)
            else:
                st.session_state.messages.append(response)
                st.session_state["logger"].info(f"Proctor: {response['content']}")
                

        else:
            response = st.session_state["teacher"](prompt, st)

            if 'function_call' in response:
                function_name = response['function_call']['name']
                if function_name == 'get_proctor':
                    get_proctor(st)
                elif function_name == 'exit':
                    exit(st)
            else:
                st.session_state.messages.append(response)
                st.session_state["logger"].info(f"Teacher: {response['content']}")


if password := st.text_input("Enter Password", key="user_password", type="password"):
    if password == st.secrets["password"]:
        main()
    else:
        st.session_state["messages"] = None
        st.session_state["logger"] = None