from pydantic import BaseModel
from typing import List


class DialogueMessage(BaseModel):
    '''Сообщение в диалоге'''
    output: str


class ListeningWord(BaseModel):
    '''Слово в упражнении аудирования'''
    count: int
    word: str
    wav: str
    id: int


class ReadingText(BaseModel):
    '''Предложение упражнения чтения'''
    count: int
    text: str
    wav: str
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