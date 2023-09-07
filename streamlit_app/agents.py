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
		self.function_names = [f["name"] for f in functions] if functions else None

		self.messages = [{'role': 'system', 'content': system_prompt}]



	def __call__(self, prompt):
		self.messages.append({'role': 'user', 'content': prompt})
		got_response = False
		while not got_response:
			if self.functions:
				response = openai.ChatCompletion.create(model=self.model_name, messages=self.messages, temperature=self.temperature, stream=self.stream, functions=self.functions)
			else:
				response = openai.ChatCompletion.create(model=self.model_name, messages=self.messages, temperature=self.temperature, stream=self.stream)

			final_message = None

			for choice in response.choices:
				message = choice.message

				if 'function_call' in message:
					if not self.function_names:
						continue

					function_name = message['function_call']['name']

					if function_name in self.function_names:
						final_message = message
					else:
						continue
				else:
					final_message = message
					break


			if final_message is not None:
				got_response = True
				print(response.choices[0].message)
				# raise ValueError("OpenAI returned an invalid function call request")

		self.messages.append(final_message)

		return final_message


	def clear_chat_history(self):
		self.messages = [{'role': 'system', 'content': self.system_prompt}]

	def print_chat_history(self):
		for msg in self.messages:
			print(f"{msg['role']}: {msg['content']}")
