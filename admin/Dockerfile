FROM python:3.11-slim-buster

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файл с зависимостями и устанавливаем их
COPY ./req.txt /app/req.txt
RUN pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /app/req.txt

# Копируем исходный код в контейнер
COPY ./ /app

# Устанавливаем переменную окружения
ENV PYTHONUNBUFFERED 1

# Собираем статические файлы
RUN python manage.py collectstatic --noinput

# Устанавливаем права доступа для статических файлов
RUN chmod -R +r static

# Открываем порт
EXPOSE 83

# Команда для запуска приложения
CMD python manage.py runserver 0.0.0.0:83
