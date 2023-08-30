from pydantic import BaseModel
from typing import List


class DialogueMessage(BaseModel):
    '''Сообщение в диалоге'''
    output: str

class Audio(BaseModel):
    '''wav'''
    wav_base64: str
    sample_rate: int


class ListeningWord(BaseModel):
    '''Слово в упражнении аудирования'''
    count: int
    word: str
    audio: Audio
    id: int


class ReadingText(BaseModel):
    '''Предложение упражнения чтения'''
    count: int
    text: str
    audio: Audio
    id: int


class ReadingAnswer(BaseModel):
    '''Результат упражнения чтение'''
    status: int
    text: str
    id: int


class GrammarProposal(BaseModel):
    '''Предложение для упражнения грамматики'''
    count: int
    proposal: str
    words: List[str]
    id: int