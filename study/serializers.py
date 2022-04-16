from rest_framework import serializers

from .models import Student, Texts


class UserSerializer(serializers.Serializer):
    '''Представление пользователя'''
    email = serializers.EmailField()
    username = serializers.CharField(max_length=100)


class StudentSerializer(serializers.HyperlinkedModelSerializer):
    '''Модель студента'''

    user = UserSerializer()

    class Meta:
        model = Student
        fields = '__all__'


class TextSerializer(serializers.HyperlinkedModelSerializer):
    '''Модель Текстов'''

    class Meta:
        model = Texts
        fields = '__all__'