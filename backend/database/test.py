import unittest
from db_models import GrammarDTO, ListeningDTO, ReadingDTO
from db_dto import DataBaseDTO


class TestDatabaseManager(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.db_manager = DataBaseDTO('db.sqlite3')
        await self.db_manager.initialize()

    async def asyncTearDown(self):
        await self.db_manager.close()

    async def test_insert_and_retrieve_grammar(self):
        grammar_dto = GrammarDTO("Test grammar text", 1)
        await self.db_manager.insert_into_grammar(grammar_dto)

        retrieved_record = await self.db_manager.get_grammar_by_id(1)
        self.assertEqual(retrieved_record.text, "Test grammar text")
        self.assertEqual(retrieved_record.id, 1)

    async def test_insert_and_retrieve_listening(self):
        listening_dto = ListeningDTO("Test listening word", 1)
        await self.db_manager.insert_into_listening(listening_dto)

        retrieved_record = await self.db_manager.get_listening_by_id(1)
        self.assertEqual(retrieved_record.word, "Test listening word")
        self.assertEqual(retrieved_record.id, 1)

    async def test_insert_and_retrieve_reading(self):
        reading_dto = ReadingDTO("Test reading text", 1)
        await self.db_manager.insert_into_reading(reading_dto)

        retrieved_record = await self.db_manager.get_reading_by_id(1)
        self.assertEqual(retrieved_record.text, "Test reading text")
        self.assertEqual(retrieved_record.id, 1)

    async def test_get_all_grammar(self):
        grammar_dto = GrammarDTO("Test grammar text", 1)
        await self.db_manager.insert_into_grammar(grammar_dto)

        grammar_records = await self.db_manager.get_all_grammar()
        self.assertEqual(len(grammar_records), 1)
        self.assertEqual(grammar_records[0].text, "Test grammar text")
        self.assertEqual(grammar_records[0].id, 1)

    # Add similar tests for other methods as needed

if __name__ == '__main__':
    unittest.main()
