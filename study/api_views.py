from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework import permissions

from .models import Text, Word
from .serializers import TextSerializer, WordSerializer

from django.views import View


class TextsViewSet(viewsets.ModelViewSet):
    '''Представление модели текстов'''
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    permission_classes = [permissions.IsAuthenticated]


class WordViewSet(viewsets.ModelViewSet):
    '''Представление модели слов'''
    queryset = Word.objects.all()
    serializer_class = WordSerializer
    permission_classes = [permissions.IsAuthenticated]


class GetWorsForAudition(View):
    def get(self, request):
        words = Word.objects.all()

        tatar_true, tatar_false = [], []

        for index in range(2, 2 * (len(words)//2), 2):
            tatar_true.append(words[index].tatar)
            tatar_false.append(words[index-1].tatar)

        context = {
            'true_words': tatar_true,
            'false_words': tatar_false
        }

        return JsonResponse(context)