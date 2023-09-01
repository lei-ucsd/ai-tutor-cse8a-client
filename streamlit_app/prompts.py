from constants import WELCOME_MESSAGE, EVALUATOR_PROMPT, MANAGER_PROMPT, TEACHER_PROMPT

def create_system_prompt(prompt, **kwargs):
    return prompt.format(**kwargs)

get_welcome_message = lambda: WELCOME_MESSAGE
get_manager_prompt = lambda **kwargs: create_system_prompt(MANAGER_PROMPT, **kwargs)
get_teacher_prompt = lambda **kwargs: create_system_prompt(TEACHER_PROMPT, **kwargs)
get_evaluator_prompt = lambda **kwargs: create_system_prompt(EVALUATOR_PROMPT, **kwargs)