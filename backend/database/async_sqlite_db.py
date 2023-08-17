import aiosqlite


class AsyncSQLiteDB:
    def __init__(self, db_name):
        self.db_name = db_name

    async def initialize(self):
        self.connection = await aiosqlite.connect(self.db_name)
        self.cursor = await self.connection.cursor()

    async def close(self):
        await self.cursor.close()
        await self.connection.close()

    async def execute(self, query, parameters=None):
        await self.cursor.execute(query, parameters or ())
        await self.connection.commit()

    async def fetch_all(self, query, parameters=None):
        await self.cursor.execute(query, parameters or ())
        return await self.cursor.fetchall()

    async def fetch_one(self, query, parameters=None):
        await self.cursor.execute(query, parameters or ())
        return await self.cursor.fetchone()