from django.db import models
from django.conf import settings


User = settings.AUTH_USER_MODEL


class Student(models.Model):
    '''Ученик'''
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)

    surname = models.CharField(verbose_name='Фамилия', max_length=30)
    name = models.CharField(verbose_name='Имя', max_length=30)
    lastname = models.CharField(verbose_name='Отчество', max_length=30)

    birth_day_date = models.DateField(verbose_name='Дата рождения')
    photo = models.ImageField(verbose_name='Фото')

    rang = models.FloatField(verbose_name='Ранг пользователя', default=0)

    texts = models.ManyToManyField('Text', verbose_name='Текста прочитанные пользователем', null=True, blank=True)
    words = models.ManyToManyField('Word', verbose_name='Слова изученные пользователем', null=True, blank=True)

    def get_full_name(self):
        return f'{self.surname} {self.name} {self.lastname}'

    def get_sn(self):
        return f'{self.surname} {self.name}'

    def __str__(self):
        return f'Пользователь - {self.id} - {self.get_full_name()}'


class Text(models.Model):
    '''Текст для чтения'''
    title = models.TextField(verbose_name='Название текста')
    text_html = models.TextField(verbose_name='Текст с форматированием')
    text = models.TextField(verbose_name='Сырой текст')

    def __str__(self):
        return f'Текст для чтения - {self.title}'


class Word(models.Model):
    '''Слова для изучения'''
    tatar = models.CharField(verbose_name='Слово на татарском', max_length=30)
    rus = models.CharField(verbose_name='Слово на русском', max_length=30)

    def __str__(self):
        return f'Слово - {self.rus}'