from flask import Flask, request
from bs4 import BeautifulSoup
import random, flask, json
from flask_cors import CORS
import numpy as np
from io import BytesIO

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
import requests
from urllib.parse import quote, unquote


class DialoBot():
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("Grossmend/rudialogpt3_medium_based_on_gpt2")
        self.model = AutoModelForCausalLM.from_pretrained("Grossmend/rudialogpt3_medium_based_on_gpt2").cuda()

    def get_length_param(self, text: str) -> str:
        tokens_count = len(self.tokenizer.encode(text))
        if tokens_count <= 15:
            len_param = '1'
        elif tokens_count <= 50:
            len_param = '2'
        elif tokens_count <= 256:
            len_param = '3'
        else:
            len_param = '-'
        return len_param

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
        chat_history_ids = []
        for step, input_user in enumerate(messages):
            input_user = self.tat2rus(input_user)
            if step != len(messages) - 1:
                new_user_input_ids = self.tokenizer.encode(f"|0|{self.get_length_param(input_user)}|" + input_user + self.tokenizer.eos_token, return_tensors="pt")
            else:
                new_user_input_ids = self.tokenizer.encode(f"|0|{self.get_length_param(input_user)}|" + input_user + self.tokenizer.eos_token + "|1|2|", return_tensors="pt")

            chat_history_ids.append(new_user_input_ids)

        bot_input_ids = torch.cat(chat_history_ids, dim=-1).cuda()

        output = self.model.generate(
            bot_input_ids,
            num_return_sequences=1,
            max_length=1024,
            no_repeat_ngram_size=3,
            do_sample=True,
            top_k=50,
            top_p=0.9,
            temperature = 0.7,
            mask_token_id=self.tokenizer.mask_token_id,
            eos_token_id=self.tokenizer.eos_token_id,
            unk_token_id=self.tokenizer.unk_token_id,
            pad_token_id=self.tokenizer.pad_token_id,
            device='cuda',
        )
        ru_out = self.tokenizer.decode(output.cpu()[:, bot_input_ids.shape[-1] + 1:][0], skip_special_tokens=True)
        print(ru_out)
        tat_out = self.rus2tat(ru_out)
        return tat_out




app = Flask(__name__)
CORS(app)
bot = DialoBot()


@app.route("/dialo", methods=['POST'])
def rouge_method():
    print(request.data)
    history = json.loads(BytesIO(request.data).read())['messages']
    print(history)
    history = [i.capitalize() for i in history]
    print(history)

    msg = bot(history)

    resp = flask.jsonify({'output': msg})
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port='5005')
