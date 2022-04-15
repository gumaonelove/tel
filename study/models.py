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

    def get_full_name(self):
        return f'{self.surname} {self.name} {self.lastname}'

    def get_sn(self):
        return f'{self.surname} {self.name}'

    def __str__(self):
        return f'Пользователь - {self.id} - {self.get_full_name()}'

