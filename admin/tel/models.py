# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Grammar(models.Model):
    text = models.TextField()

    class Meta:
        managed = False
        db_table = 'grammar'

    def __str__(self):
        return self.text[:50]  # Отображение первых 50 символов текста


class Listening(models.Model):
    word = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'listening'
    
    def __str__(self):
        return self.word


class Reading(models.Model):
    text = models.TextField()

    class Meta:
        managed = False
        db_table = 'reading'
    
    def __str__(self):
        return self.text[:50]  # Отображение первых 50 символов текста
