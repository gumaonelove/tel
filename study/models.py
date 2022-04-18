from django.db import models
from django.conf import settings


import math


User = settings.AUTH_USER_MODEL


class Student(models.Model):
    '''Ученик'''
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)

    surname = models.CharField(verbose_name='Фамилия', max_length=30, null=True, blank=True)
    name = models.CharField(verbose_name='Имя', max_length=30, null=True, blank=True)
    lastname = models.CharField(verbose_name='Отчество', max_length=30, null=True, blank=True)

    birth_day_date = models.DateField(verbose_name='Дата рождения', null=True, blank=True)
    photo = models.ForeignKey('Image', verbose_name='Фото', null=True, blank=True, on_delete=models.SET_NULL)

    rang = models.FloatField(verbose_name='Ранг пользователя', default=0)
    texts = models.ManyToManyField('ReadText', verbose_name='Текста прочитанные пользователем',
                                   null=True, blank=True, related_name='read_texts')
    words = models.ManyToManyField('LearnWords', verbose_name='Слова изученные пользователем',
                                   null=True, blank=True, related_name='learned_words')
    sentence = models.ManyToManyField('BuildSentence', verbose_name='Предложения собранные пользователем',
                                      null=True, blank=True, related_name='build_sentence')

    def get_full_name(self):
        return f'{self.surname} {self.name} {self.lastname}'

    def get_sn(self):
        return f'{self.surname} {self.name}'

    def __str__(self):
        return f'Пользователь - {self.id} - {self.get_full_name()}'

    def full_complited(self):
        return self.surname and self.name and self.lastname and self.birth_day_date and self.photo

    def get_photo_url(self):
        return self.photo.img.url

    def recals_rang(self):
        _rang = self.words.count() * 0.06 + self.sentence.count() * 0.04 + self.texts.count() * 0.1
        sigm = 1 / (1 + math.exp(-_rang))
        return int(sigm * 100)

class ReadText(models.Model):
    '''Прочитанный тексты'''
    text = models.ForeignKey('Text', verbose_name='Текст', on_delete=models.CASCADE)
    data = models.DateField(verbose_name='Дата прочтения текста',  auto_now_add=True)
    rang = models.FloatField(verbose_name="Процент точности")
    student = models.ForeignKey('Student', verbose_name='Пользователь', on_delete=models.CASCADE)

    def __str__(self):
        return f'Текст {self.id}'


class LearnWords(models.Model):
    '''Выученные слова'''

    word = models.ForeignKey('Word', verbose_name='Текст', on_delete=models.CASCADE)
    data = models.DateField(verbose_name="Когда выучил слово", auto_now_add=True)
    student = models.ForeignKey('Student', verbose_name='Пользователь', on_delete=models.CASCADE)

    def __str__(self):
        return f'Слово {self.id}'


class BuildSentence(models.Model):
    '''Выученные слова'''

    sentence = models.ForeignKey('Sentence', verbose_name='Предложение', on_delete=models.CASCADE)
    data = models.DateField(verbose_name="Когда выучил слово", auto_now_add=True)
    student = models.ForeignKey('Student', verbose_name='Пользователь', on_delete=models.CASCADE)

    def __str__(self):
        return f'Предложение {self.id}'


class Text(models.Model):
    '''Текст для чтения'''
    title = models.TextField(verbose_name='Название текста')
    text = models.TextField(verbose_name='Текст')

    def __str__(self):
        return f'Текст для чтения - {self.title}'


class Word(models.Model):
    '''Слова для изучения'''
    tatar = models.CharField(verbose_name='Слово на татарском', max_length=30, unique=True)
    rus = models.CharField(verbose_name='Слово на русском', max_length=30, unique=True)

    def __str__(self):
        return f'{self.tatar} - {self.rus}'


class Image(models.Model):
    '''Фотографии'''
    img = models.ImageField(verbose_name='Изображение')

    def __str__(self):
        return self.img.name


class Sentence(models.Model):
    '''Предложения для грамматического конструктора'''
    text = models.TextField(verbose_name='Предложение')

    def __str__(self):
        return f'Предложение - {self.id}'