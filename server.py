import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from parkinglot import router

app= FastAPI(title='parkinglotApi')
app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origin_regex='https?://.*',
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port= 9013)
