from django import forms
from django.contrib import admin
from ckeditor_uploader.widgets import CKEditorUploadingWidget

from .models import Text


class TextsForm(forms.ModelForm):
    '''Текстовый редактор для форматирования текста'''
    text_html = forms.CharField(widget=CKEditorUploadingWidget(), label='Текст с форматированием')

    class Meta:
        model = Text
        fields = '__all__'


class TextsAdmin(admin.ModelAdmin):
    form = TextsForm