# Проект с хакатона TatarБу
Платформа для изучения татарского языка Tatlearn -> learn

## Описание идеи

Наш проект — портал для интерактивного изучения татарского языка с использованием методов геймификации.

Основная цель — сделать обучение интересным, без занудной теории, только практика.

## Методы обучения
1. Reading с оценкой качества и скоростью чтения
2. Listening с выбором слова
3. Writing — составление предложения на татарском перетаскиванием слов
4. Чат-бот болталка на татарском


## Описание репозитория
### Директория backend/config
1. **tatarby.conf** - supervisor config
2. **gunicorn.conf.py** - gunicorn config
3. В которых *gumaonelove* это sudo пользователь системы
4. Локальный сервер 127.0.0.1:9000, проксировать с **learn.saf.tatar**

### Прочее
1. **req.txt** - файл зависимостей
2. **db.sqlite3** - файл Базы Данных
3. **vps_config/dialo.service** - supervisor сети на диалоговую систему
4. **vps_config/stt.service** - supervisor сети на speak to text систему
5. **vps_config/tts.service** - supervisor сети на text to speak систему

### Команды администрирования
* `sudo apt install nginx git supervisor`
* `git clone https://github.com/gumaonelove/tatarby.git`
* `cd tatarby`
* `sudo apt-get install python3-venv`
* `python3 -m venv venv`
* `source venv/bin/activate`
* `pip install -r req.txt`
* `cd /etc/supervisor/conf.d/`
* `sudo ln /home/gumaonelove/tatarby/config/tatarby.conf`
* `sudo update-rc.d supervisor enable`