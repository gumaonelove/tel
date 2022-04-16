from rest_framework import viewsets
from rest_framework import permissions

from .models import Student, Text
from .serializers import StudentSerializer, TextSerializer


class StudentViewSet(viewsets.ModelViewSet):
    '''Представление модели студента'''
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [permissions.IsAuthenticated]


class TextsViewSet(viewsets.ModelViewSet):
    '''Представление модели студента'''
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    permission_classes = [permissions.IsAuthenticated]