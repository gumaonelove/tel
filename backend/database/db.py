from .async_sqlite_db import AsyncSQLiteDB

class Database:
    def __init__(self, db_name):
        self.db = AsyncSQLiteDB(db_name)

    async def initialize(self):
        await self.db.initialize()

    async def close(self):
        await self.db.close()

    async def execute(self, query, parameters=None):
        await self.db.cursor.execute(query, parameters or ())
        await self.db.connection.commit()

    async def fetch_all(self, query, parameters=None):
        await self.db.cursor.execute(query, parameters or ())
        return await self.db.cursor.fetchall()

    async def fetch_one(self, query, parameters=None):
        await self.db.cursor.execute(query, parameters or ())
        return await self.db.cursor.fetchone()