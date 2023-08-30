from fastapi import APIRouter

from neiro.dialogue import DialoBot
from neiro.silero import Silero

from database.db_dto import DataBaseDTO, ListeningDTO, GrammarDTO, ReadingDTO

from .models import DialogueMessage, ListeningWord, ReadingText, ReadingAnswer, GrammarProposal

router = APIRouter()

bot = DialoBot()
tts_tt = Silero()
tts_tt.fit()

async def get_connect():
    db = DataBaseDTO('database/db.sqlite3')
    await db.initialize()
    return db


@router.post('/dialogue/', response_model=DialogueMessage)
async def dialogue(messages: list) -> dict:
    '''Диалоговая система'''
    history = [i.capitalize() for i in messages]
    msg = bot(history)
    return {'output': msg}


@router.get('/listening/', response_model=ListeningWord)
async def listening(id: int) -> dict:
    '''Аудирование - изучение татарских слов'''
    db = await get_connect()
    count: int = await db.get_listening_record_count()
    listening_dto: ListeningDTO = await db.get_listening_by_id(id)
    audio = await tts_tt.predict(listening_dto.word)
    await db.close()

    return {
        'count': count, # all
        'word': listening_dto.word,
        'audio': audio,
        'id': id
    }


@router.get('/reading/', response_model=ReadingText)
async def reading(id: int) -> dict:
    '''Упражнение чтение'''
    db = await get_connect()
    count: int = await db.get_reading_record_count()
    reading_dto: ReadingDTO = await db.get_reading_by_id(id)
    audio = await tts_tt.predict(reading_dto.text)
    await db.close()

    return {
        'count': count,  # all
        'text': reading_dto.text,
        'audio': audio,
        'id': id
    }


@router.post('/reading/', response_model=ReadingAnswer)
async def reading(wav: str, id: int) -> dict:
    '''Упражнение чтение'''
    return {
        'status': 200,
        'text': 'success',
        'id': id
    }


@router.get('/grammar/', response_model=GrammarProposal)
async def grammar(id: int) -> dict:
    '''Упражнение грамматика'''
    db = await get_connect()
    count: int = await db.get_grammar_record_count()
    grammar_dto: GrammarDTO = await db.get_grammar_by_id(id)
    words = grammar_dto.text.split()
    await db.close()

    return {
        'count': count,
        'proposal': grammar_dto.text,
        'words': words,
        'id': id
    }