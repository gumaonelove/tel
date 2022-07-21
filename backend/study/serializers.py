from rest_framework import serializers

from .models import Text, Word


class TextSerializer(serializers.HyperlinkedModelSerializer):
    '''Модель Текстов'''

    class Meta:
        model = Text
        fields = '__all__'


class WordSerializer(serializers.HyperlinkedModelSerializer):
    '''Модель слов'''
    class Meta:
        model = Word
        fields = '__all__'