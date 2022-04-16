from django.http import JsonResponse

from rest_framework import viewsets
from rest_framework import permissions

from .models import Text, Word, Student
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


class GetWordsForAuditionApi(View):
    '''Отдаю слова для аудирования'''
    def get(self, request):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)

            learned_words_qs, words_qs = student.words.all(), Word.objects.all()
            learned_words, words = set(), set()

            for learned_word in learned_words_qs:
                learned_words.add(learned_word.word.tatar)

            for word in words_qs:
                words.add(word.tatar)

            answer_words = list(words - learned_words)
            tatar_true, tatar_false = [], []

            for index in range(1, (2 * len(answer_words) + 1) // 2 , 2):
                tatar_true.append(answer_words[index])
                tatar_false.append(answer_words[index - 1])
                if len(tatar_true) == 10: break

            context = {
                'true_words': tatar_true,
                'false_words': tatar_false,
            }

            return JsonResponse(context)
        else:
            return JsonResponse({})