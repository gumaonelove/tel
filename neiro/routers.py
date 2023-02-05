from fastapi import APIRouter

from dialogue import DialoBot

router = APIRouter()

bot = DialoBot()


@router.post('/dialogue/')
async def dialogue(messages: list):
    '''Диалоговая система'''
    history = [i.capitalize() for i in messages]
    msg = bot(history)
    resp = {'output': msg}
    return resp