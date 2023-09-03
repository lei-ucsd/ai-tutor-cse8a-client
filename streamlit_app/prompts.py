from constants import WELCOME_MESSAGE, EVALUATOR_PROMPT, PROCTOR_PROMPT, TEACHER_PROMPT

def create_system_prompt(prompt, **kwargs):
    return prompt.format(**kwargs)

get_welcome_message = lambda: WELCOME_MESSAGE
get_proctor_prompt = lambda **kwargs: create_system_prompt(PROCTOR_PROMPT, **kwargs)
get_teacher_prompt = lambda **kwargs: create_system_prompt(TEACHER_PROMPT, **kwargs)
get_evaluator_prompt = lambda **kwargs: create_system_prompt(EVALUATOR_PROMPT, **kwargs)