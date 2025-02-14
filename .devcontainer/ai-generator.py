import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_code(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=200
    )
    return response.choices[0].text.strip()

# Example usage
print(generate_code("Create a Python web scraper"))
