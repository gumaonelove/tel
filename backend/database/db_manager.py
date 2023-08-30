from .db import Database
from .db_models import DTOModel
from typing import List, Type

class DatabaseManager(Database):

    async def insert_into_table(self, table_name: str, dto: Type[DTOModel]):
        query = f"INSERT INTO {table_name} ({', '.join(dto.__dict__.keys())}) VALUES ({', '.join(['?'] * len(dto.__dict__))})"
        values = list(dto.__dict__.values())
        await self.execute(query, values)

    async def get_records_by_id(self, table_name: str, column: str,  dto_class: Type[DTOModel], id: int) -> DTOModel:
        query = f"SELECT {column} FROM {table_name} WHERE id = ?"
        record = await self.fetch_one(query, (id,))
        if record:
            return dto_class(id, *record)
        return None

    async def get_all_records(self, table_name: str, dto_class: Type[DTOModel]) -> List[DTOModel]:
        query = f"SELECT * FROM {table_name}"
        records = await self.db.fetch_all(query)
        return [dto_class(record[0], record[1]) for record in records]

    async def get_table_record_count(self, table_name: str) -> int:
        query = f"SELECT COUNT(*) FROM {table_name}"
        record_count = await self.db.fetch_one(query)
        if record_count:
            return record_count[0]
        return 0