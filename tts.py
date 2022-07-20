import torch
import torchaudio

from flask import Flask, request
import random, flask, json
from flask_cors import CORS

from io import BytesIO

class STT():
    def __init__(self, ):
        language = 'tt'
        model_id = 'dilyara_v2'
        device = torch.device('cpu')

        model, example_text = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                             model='silero_tts',
                                             language=language,
                                             speaker=model_id)
        model.to(device)  # gpu or cpu

        self.model = model

    def __call__(self, text):
        sample_rate = 16000
        example_text = text

        audio = self.model.apply_tts(texts=example_text,
                                sample_rate=sample_rate)
        print(example_text)
        return audio[0].detach().cpu().numpy().tolist(), sample_rate


app = Flask(__name__)
CORS(app)

stt = STT()

@app.route("/stt", methods=['POST'])
def rouge_method():
    text = request.data.decode()

    audio, sample_rate = stt(text)

    resp = flask.jsonify({'output': audio, 'sample_rate': sample_rate})
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port=3003)

