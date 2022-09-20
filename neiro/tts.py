import torch
from flask import Flask, request
import flask
from flask_cors import CORS
import torchaudio
import uuid


class TTS():
    def __init__(self, ):
        language = 'tt'
        model_id = 'dilyara_v2'
        device = torch.device('cuda')

        model, example_text = torch.hub.load(repo_or_dir='snakers4/silero-models',
                                             model='silero_tts',
                                             language=language,
                                             speaker=model_id)
        model.to(device)  # gpu or cpu

        self.model = model

    def __call__(self, text):
        sample_rate = 16000
        example_text = text + ' '
        print(example_text)

        audio = self.model.apply_tts(texts=example_text,
                                sample_rate=sample_rate)
        print(len(audio), audio)
        t = audio[0].detach().cpu().unsqueeze(0)
        print(t.shape)
        file_name = str(uuid.uuid4()) + '.wav'
        path = '../backend/media/' + file_name
        torchaudio.save(path, t, sample_rate)
        return file_name


app = Flask(__name__)
CORS(app)

tts = TTS()


@app.route("/tts", methods=['POST'])
def rouge_method():
    text = request.data.decode()

    path = tts(text)

    resp = flask.jsonify({'output': path})
    resp.headers.add('Access-Control-Allow-Origin', '*')
    return resp

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port=3003)

