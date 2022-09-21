from django.http import JsonResponse

from rest_framework import viewsets
from rest_framework import permissions

from .models import Text, Word, Student
from .serializers import TextSerializer, WordSerializer
from .mixins import UserMixin

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


class GetWordsForAuditionApi(UserMixin, View):
    '''Отдаю слова для аудирования'''
    def get(self, request):
        student = Student.objects.get(user=request.user)

        learned_words_qs, words_qs = student.words.all(), Word.objects.all()
        learned_words, words = set(), set()

        for learned_word in learned_words_qs:
            learned_words.add(learned_word.word.tatar)

        for word in words_qs:
            words.add(word.tatar)

        answer_words = list(words - learned_words)
        tatar_true, false_rus_words, rus_true = [], [], []

        for index in range(1, (2 * len(answer_words) + 1) // 2 , 2):
            tatar_true.append(answer_words[index])

            _word = Word.objects.get(tatar=answer_words[index])
            rus_true.append(_word.rus)

            _word_1 = Word.objects.get(tatar=answer_words[index - 1])
            false_rus_words.append(_word_1.rus)
            if len(tatar_true) == 10: break

        context = {
            'true_tatar_words': tatar_true,
            'false_rus_words': false_rus_words,
            'true_rus_words': rus_true
        }

        return JsonResponse(context)