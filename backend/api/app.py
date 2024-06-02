import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import router

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://docs.tel.saf.tatar/",
    "https://tel.saf.tatar/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=84)