import openai


class GenericAgent:
	def __init__(self, model_name, system_prompt, openai_api_key, temperature=0, assistant_name='assistant', stream=False, functions=None):
		self.model_name = model_name
		self.system_prompt = system_prompt
		self.openai_api_key = openai_api_key
		self.temperature = temperature
		self.assistant_name = assistant_name
		self.stream = stream
		self.functions = functions

		self.messages = [{'role': 'system', 'content': system_prompt}]



	def __call__(self, prompt):
		self.messages.append({'role': 'user', 'content': prompt})

		if self.functions:
			response = openai.ChatCompletion.create(model=self.model_name, messages=self.messages, temperature=self.temperature, stream=self.stream, functions=self.functions)
		else:
			response = openai.ChatCompletion.create(model=self.model_name, messages=self.messages, temperature=self.temperature, stream=self.stream)

		message = response.choices[0].message
		self.messages.append(message)

		return message


	def clear_chat_history(self):
		self.messages = [{'role': 'system', 'content': self.system_prompt}]

	def print_chat_history(self):
		for msg in self.messages:
			print(f"{msg['role']}: {msg['content']}")
