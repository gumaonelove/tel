import torch
from omegaconf import OmegaConf
import soundfile as sf
import base64
import io


class Silero:
    '''Интерфейс взаимодействия с моделями Silero'''
    models_yaml = 'neiro/latest_silero_models.yml'
    models_url = 'https://raw.githubusercontent.com/snakers4/silero-models/master/models.yml'
    dst = 'neiro/latest_silero_models.yml'
    repo_or_dir = 'snakers4/silero-models'
    model_type = 'silero_tts'

    def __init__(
            self, sample_rate=48000, speaker='dilyara', put_accent=True, put_yo=True,
            language='tt', model_id='v3_tt', device='cpu'
    ):
        self.sample_rate = sample_rate
        self.speaker = speaker
        self.put_accent = put_accent
        self.put_yo = put_yo
        self.language = language
        self.model_id = model_id
        self.device = torch.device(device)
        self.models = None

    def __download(self):
        torch.hub.download_url_to_file(self.models_url, self.dst, progress=False)

    def __load(self):
        self.model, _ = torch.hub.load(
            repo_or_dir=self.repo_or_dir,
            model=self.model_type,
            language=self.language,
            speaker=self.model_id
        )
        self.model.to(self.device)  # gpu or cpu

    @staticmethod
    def wav_2_base64(wav_data):
        wav_base64 = base64.b64encode(wav_data).decode("utf-8")
        return wav_base64

    def tensor_2_wav(self, audio: torch.tensor):
        # Преобразуем тензор в массив numpy и записываем во временный файл WAV
        temp_wav_file = io.BytesIO()
        sf.write(temp_wav_file, audio, self.sample_rate, format='WAV', subtype='PCM_16')

        # Получаем содержимое временного WAV-файла в виде байтовых данных
        temp_wav_file.seek(0)
        wav_data = temp_wav_file.read()

        return wav_data


    def fit(self):
        self.__download()
        self.models = OmegaConf.load(self.models_yaml)
        self.__load()

    async def predict(self, text: str) -> dict:
        assert type(text) == str, f'Аргумент text имеет не верный тип данных, ожидался str, а получен {type(text)}'
        audio = self.model.apply_tts(
            text=text,
            speaker=self.speaker,
            sample_rate=self.sample_rate,
            put_accent=self.put_accent,
            put_yo=self.put_yo
        )

        wav_data = self.tensor_2_wav(audio)
        # Преобразуем байтовые данные WAV в Base64
        base64_string = self.wav_2_base64(wav_data)
        ans = {
            'wav_base64': base64_string,
            'sample_rate': self.sample_rate
        }
        return ans