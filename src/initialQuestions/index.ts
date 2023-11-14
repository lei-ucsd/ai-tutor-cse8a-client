export const QUESTIONS = {
    'conditionals': {
        'remember': [
            "Can you explain the role of indentation in `if`, `else`, and `elif` clauses in Python?"
        ],
        'understand': [
            "What is the output of the code below if 'a' equals to 5 and 'b' equals to 7? \n\n(A) a is less than b \n\n(B) a is equal to b \n\n(C) a is greater than b \n\n(D) It will throw an error\n\n```python\nif a < b:\n   print('a is less than b')\nelif a == b:\n   print('a is equal to b')\nelse:\n   print('a is greater than b')\n```\n"
        ], 
        'apply': [
            "Assume you have a variable \"temp\" which stores the current temperature. Your goal is to program a thermostat to behave differently based on the temperature.If \"temp\" is less than 20, the thermostat should activate heating and print \"Heating ON\". If \"temp\" is equal to or higher than 20 and less than 25, the thermostat should remain on standby and print \"Thermostat on standby\". If \"temp\" is equal to or higher than 25, the thermostat should activate cooling and print \"Cooling ON\". Write the if-else statement for this scenario.\nPlease format your answer using Python code, as outlined below:\n```python\n# you should replace the string \"{your_code_here}\" with your Python code\n{your_code_here}\n```\n"]
            , 
        'analyze': [
            "Consider the following Python code. What will be outputted and why?\n\nCode:\n```python\ngender = 'female'\nage = 15\nif gender == 'male':\n   print(\"Hello sir, you're welcome.\")\nelif age < 18:\n   print(\"You're not yet an adult.\")\nelse:\n   print(\"Hello ma'am, you're welcome.\")\n```\nCan you analyze the logic of this if-elif-else construct? How does it determine which statement to print? Also, supposing the variables 'gender' and 'age' were set to different values, how would the output change?"
        ]
    }
}