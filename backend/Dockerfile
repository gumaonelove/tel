FROM python:3.11-slim-buster

WORKDIR /code

COPY ./req.txt /code/req.txt

RUN pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./ /code/app

ENV PYTHONUNBUFFERED 1

EXPOSE 84

CMD ["uvicorn", "api.app:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "84"]