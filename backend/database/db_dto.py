from .db_manager import DatabaseManager
from .db_models import GrammarDTO, ListeningDTO, ReadingDTO, DTOModel
from typing import Type

class DataBaseDTO(DatabaseManager):
    # Methods specific to each table
    async def insert_into_grammar(self, grammar_dto: Type[DTOModel]):
        await self.insert_into_table("grammar", grammar_dto)

    async def insert_into_listening(self, listening_dto: Type[ListeningDTO]):
        await self.insert_into_table("listening", listening_dto)

    async def insert_into_reading(self, reading_dto: Type[ReadingDTO]):
        await self.insert_into_table("reading", reading_dto)

    async def get_grammar_by_id(self, id: int):
        return await self.get_records_by_id("grammar", 'text', GrammarDTO, id)

    async def get_listening_by_id(self, id: int):
        return await self.get_records_by_id("listening", 'word', ListeningDTO, id)

    async def get_reading_by_id(self, id: int):
        return await self.get_records_by_id("reading", 'text', ReadingDTO, id)

    async def get_all_grammar(self):
        return await self.get_all_records("grammar", GrammarDTO)

    async def get_all_listening(self):
        return await self.get_all_records("listening", ListeningDTO)

    async def get_all_reading(self):
        return await self.get_all_records("reading", ReadingDTO)

    async def get_grammar_record_count(self):
        return await self.get_table_record_count("grammar")

    async def get_listening_record_count(self):
        return await self.get_table_record_count("listening")

    async def get_reading_record_count(self):
        return await self.get_table_record_count("reading")