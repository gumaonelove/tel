from django.db import models


class Developer(models.Model):
    '''Команда'''
    name = models.CharField(verbose_name='Имя', max_length=30)
    surname = models.CharField(verbose_name='Фамилия', max_length=30)
    image = models.ImageField(verbose_name='Фотография')

    position = models.CharField(verbose_name='Должность', max_length=50)
    rang = models.IntegerField(verbose_name='Рейтинг')

    def get_full_name(self):
        return self.surname + ' ' + self.name

    def __str__(self):
        return f'{self.position} - {self.name}'


class ContentText(models.Model):
    '''Преимущества на главной странице'''
    title = models.CharField(verbose_name='Заголовок', max_length=20)
    text = models.TextField(verbose_name='Пояснение')

    def __str__(self):
        return f'Преимущество - {self.title}'


class PhoneNumber(models.Model):
    '''Номер телефона'''
    number = models.CharField(verbose_name='Номер телефона', max_length=15)

    def __str__(self):
        return f'{self.number}'


class Email(models.Model):
    '''Электронная почта'''
    email = models.EmailField(verbose_name='Электронная почта')

    def __str__(self):
        return f'{self.email}'