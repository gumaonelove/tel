from urllib.parse import unquote

import requests
import torch
from bs4 import BeautifulSoup
from transformers import AutoModelForCausalLM, AutoTokenizer


class DialoBot():
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("tinkoff-ai/ruDialoGPT-medium")
        self.model = AutoModelForCausalLM.from_pretrained("tinkoff-ai/ruDialoGPT-medium").cpu()
        self.device = torch.device('cpu')

    def tat2rus(self, text):
        response_translated = requests.get("https://translate.tatar/translate?lang=1&text=" +
                                           unquote(text))
        if b"translation" in response_translated.content:
            parsed_html = BeautifulSoup(response_translated.content, features="html.parser")
            return parsed_html.find("translation").text
        else:
            return response_translated.text

    def rus2tat(self, text):
        response_translated = requests.get("https://translate.tatar/translate?lang=0&text=" +
                                           unquote(text))
        if b"translation" in response_translated.content:
            parsed_html = BeautifulSoup(response_translated.content, features="html.parser")
            return parsed_html.find("translation").text
        else:
            return response_translated.text

    def __call__(self, messages):
        all_text = ''
        for step, input_user in enumerate(messages):
            input_user = self.tat2rus(input_user)
            if step % 2 == 0:
                all_text += "@@ПЕРВЫЙ@@" + input_user
            else:
                if step != len(messages) - 1:
                    all_text += "@@ВТОРОЙ@@" + input_user
                else:
                    all_text += "@@ВТОРОЙ@@" + input_user + "@@ПЕРВЫЙ@@"

        print(all_text)
        inputs = self.tokenizer(all_text, return_tensors='pt').to(self.device)
        output = self.model.generate(
            **inputs,
            top_k=10,
            top_p=0.95,
            num_beams=3,
            num_return_sequences=3,
            do_sample=True,
            no_repeat_ngram_size=2,
            temperature=1.2,
            repetition_penalty=1.2,
            length_penalty=1.0,
            eos_token_id=50257,
            max_new_tokens=40
        )
        context_with_response = [self.tokenizer.decode(sample_token_ids) for sample_token_ids in output]
        l = len(all_text.split('@@'))

        out = context_with_response[0].split('@@')[l - 1]
        print(out)
        tat_out = self.rus2tat(out)
        return tat_out