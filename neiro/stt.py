import json

from flask import Flask, request
import random, flask
from flask_cors import CORS
import numpy as np
import torch
import torchaudio
from transformers import Wav2Vec2ForCTC, Wav2Vec2Processor


class Translator():
    def __init__(self):
        #tat waw to tat text
        self.processor = Wav2Vec2Processor.from_pretrained("anton-l/wav2vec2-large-xlsr-53-tatar")
        model = Wav2Vec2ForCTC.from_pretrained("anton-l/wav2vec2-large-xlsr-53-tatar")
        model.to("cpu")
        self.model = model

    def tatwaw2tattext(self, wav_path: str):
        speech_array, sampling_rate = torchaudio.load(wav_path)
        resampler = torchaudio.transforms.Resample(sampling_rate, 16_000)
        row = resampler(speech_array).squeeze().numpy()

        inputs = self.processor(row, sampling_rate=16_000, return_tensors="pt", padding=True)
        print(inputs.input_values.shape)
        print(inputs.attention_mask.shape)

        with torch.no_grad():
            logits = self.model(inputs.input_values.to("cpu"), attention_mask=inputs.attention_mask.to("cpu")).logits

        pred_ids = torch.argmax(logits, dim=-1)

        return self.processor.batch_decode(pred_ids)



app = Flask(__name__)
CORS(app)

tr = Translator()

def levenshtein(seq1, seq2):
    size_x = len(seq1) + 1
    size_y = len(seq2) + 1
    matrix = np.zeros ((size_x, size_y))
    for x in range(size_x):
        matrix [x, 0] = x
    for y in range(size_y):
        matrix [0, y] = y

    for x in range(1, size_x):
        for y in range(1, size_y):
            if seq1[x-1] == seq2[y-1]:
                matrix [x,y] = min(
                    matrix[x-1, y] + 1,
                    matrix[x-1, y-1],
                    matrix[x, y-1] + 1
                )
            else:
                matrix [x,y] = min(
                    matrix[x-1,y] + 1,
                    matrix[x-1,y-1] + 1,
                    matrix[x,y-1] + 1
                )
    lev = (matrix[size_x - 1, size_y - 1])
    l = min(len(seq1), len(seq2))
    return (l - lev) / l

def rouge(text1, text2):
    text1 = text1.split()
    text2 = text2.split()
    q, c = 0, 0
    for n in range(0, 3):
        for i in range(min(len(text1), len(text2)) - n):
            str1, str2 = text1[i: i + n + 1], text2[i: i + n + 1]
            print(str1, str2)
            if str1 == str2:
                c += 1
            q += 1

    return c / q

def get_name():
    st = 'qwertyuiasdfghjklzxcvbnm'
    path = ''
    for i in range(10):
        idx = random.randint(0, len(st) - 1)
        path += st[idx]
    path += '.wav'
    return path


@app.route("/stt", methods=['POST'])
def rouge_method():
    print(request.data.decode())
    print(request.files)
    print(request.form, request.form['text'], dir(request), dir(request.form))

    request_data = request.files['file']
    original = request.form['text']
    name = get_name()


    request_data.save(name)
    print(name)
    text = tr.tatwaw2tattext(name)
    print(text, 'qqq', original)

    r = levenshtein(text[0], original)
    resp = flask.jsonify({'score': r, 'text': text[0]})
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=4004)
