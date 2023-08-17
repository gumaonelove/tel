from fastapi import APIRouter

from neiro.dialogue import DialoBot
from neiro.silero import Silero

from backend.database.db_dto import DataBaseDTO

from models import DialogueMessage, ListeningWord, ReadingText, ReadingAnswer, GrammarProposal

router = APIRouter()

bot = DialoBot()
tts_tt = Silero()
db = DataBaseDTO('database/db.sqlite43')


@router.post('/dialogue/', response_model=DialogueMessage)
async def dialogue(messages: list) -> dict:
    '''Диалоговая система'''
    history = [i.capitalize() for i in messages]
    msg = bot(history)
    return {'output': msg}


@router.get('/listening/', response_model=ListeningWord)
async def listening(id: int) -> dict:
    '''Аудирование - изучение татарских слов
    return id, count, wav
    '''
    count: int = await db.get_listening_record_count()
    word: str = await db.get_listening_by_id(id)
    audio = await tts_tt.predict(word)

    return {
        'count': count, # all
        'word': word,
        'audio': audio,
        'id': id
    }


@router.get('/reading/', response_model=ReadingText)
async def reading(id: int) -> dict:
    '''Упражнение чтение
    return text wav'''
    count: int = await db.get_reading_record_count()
    text: str = await db.get_reading_by_id(id)
    audio = await tts_tt.predict(text)

    return {
        'count': count,  # all
        'text': text,
        'audio': audio,
        'id': id
    }


@router.post('/reading/', response_model=ReadingAnswer)
async def reading(wav: str, id: int) -> dict:
    '''Упражнение чтение
    return text wav'''
    return {
        'status': 200,
        'text': 'success',
        'id': id
    }


@router.get('/grammar/', response_model=GrammarProposal)
async def grammar(id: int) -> dict:
    '''Упражнение грамматика
    return proposal words'''
    count: int = await db.get_grammar_record_count()
    proposal: str = await db.get_grammar_by_id(id)
    words = proposal.split()
    return {
        'proposal': proposal,
        'words': words,
        'id': id
    }