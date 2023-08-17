import torch
from omegaconf import OmegaConf


class Silero:
    '''Интерфейс взаимодействия с моделями Silero'''
    models = OmegaConf.load('latest_silero_models.yml')
    models_url = 'https://raw.githubusercontent.com/snakers4/silero-models/master/models.yml'
    dst = 'latest_silero_models.yml'
    repo_or_dir = 'snakers4/silero-models'
    model_type = 'silero_tts'

    def __download(self):
        torch.hub.download_url_to_file(self.models_url, self.dst, progress=False)

    def __load(self):
        model, _ = torch.hub.load(
            repo_or_dir=self.repo_or_dir,
            model=self.model_type,
            language=self.language,
            speaker=self.model_id
        )

        model.to(self.device)  # gpu or cpu
        return model

    def __int__(
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

        self.__download()
        self.model = self.__load()

    async def predict(self, text: str) -> dict:
        audio = self.model.apply_tts(
            text=text,
            speaker=self.speaker,
            sample_rate=self.sample_rate,
            put_accent=self.put_accent,
            put_yo=self.put_yo
        )
        ans = {
            'audio': audio,
            'sample_rate': self.sample_rate
        }
        return ans