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

		openai.api_key = openai_api_key

	def get_response(self):
		if self.functions:
			response = openai.ChatCompletion.create(model=self.model_name, messages=self.messages, temperature=self.temperature, stream=self.stream, functions=self.functions)
		else:
			response = openai.ChatCompletion.create(model=self.model_name, messages=self.messages, temperature=self.temperature, stream=self.stream)

		return response

	def __call__(self, prompt, st = None):
		self.add_message('user', prompt)
		response = self.get_response()

		message_placeholder = None

		if self.stream:
			got_response = False

			while not got_response:
				final_message = ""
				role = None
				resp = next(response)
				message = resp.choices[0].delta
				if 'function_call' in message:
					if not self.function_names:
						continue

					function_name = message['function_call']['name']

					if function_name in self.function_names:
						final_message = message
						got_response = True
						break
					else:
						response = self.get_response()
						continue
				else:
					got_response = True
					role = message["role"]
					if 'content' in message:
						got_response = True
						final_message += message.content
					else:
						continue

			if type(final_message) == str:
				with st.chat_message('assistant'):
					message_placeholder = st.empty()
					for resp in response:
						message = resp.choices[0].delta
						if not message_placeholder: message_placeholder = st.empty()
						if 'content' in message:
							final_message += message.content
							message_placeholder.markdown(final_message + "▌")
						else:
							message_placeholder.markdown(final_message)

				final_message = {'role': self.assistant_name, 'content': final_message}
				self.messages.append(final_message)

		else:
			got_response = False
			while not got_response:
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
				else:
					response = get_response()

			self.messages.append(final_message)

		return final_message

	def add_message(self, role, prompt):
		self.messages.append({'role': role, 'content': prompt})

	def clear_chat_history(self):
		self.messages = [{'role': 'system', 'content': self.system_prompt}]

	def print_chat_history(self):
		for msg in self.messages:
			print(f"{msg['role']}: {msg['content']}")
