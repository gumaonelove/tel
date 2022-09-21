import random
from json import loads

from django.http import JsonResponse
from django.shortcuts import render, redirect

from django.views import View

from .models import Student, Text, Word, LearnWords, Sentence, ReadText, BuildSentence
from .forms import ImageForm
from .mixins import UserMixin

import requests


class LearnView(UserMixin, View):
    '''main page view'''
    def get(self, request):
        context = {
            'student': self.student
        }
        return render(request, 'learn.html', context)



class ReadingView(UserMixin, View):
    '''main page view'''
    def get(self, request):
        student_texts = self.student.texts.all()
        texts = Text.objects.all()
        king_of_the_reading = False

        not_reading_texts = []

        for text in texts:
            if text not in student_texts:
                not_reading_texts.append(text)

        if not_reading_texts:
            random_index = random.randint(0, len(texts) - 1)
            text = texts[random_index]
        else:
            king_of_the_reading = True
            random_index = random.randint(0, len(texts) - 1)
            text = texts[random_index]

        context = {
            'student': self.student,
            'text': text,
            'king_of_the_reading': king_of_the_reading
        }
        return render(request, 'reading.html', context)

    def post(self, request):

        text_id = loads(request.body)['text_id']
        score = loads(request.body)['score']
        read_text = Text.objects.get(id=text_id)
        new_read_text = ReadText()
        new_read_text.text = read_text
        new_read_text.rang = int(score)/100
        new_read_text.student = self.student
        new_read_text.save()

        self.student.texts.add(new_read_text)
        return redirect('/study/reading/')



class AuditionView(UserMixin, View):
    '''Аудирование'''
    def get(self, request):

        king_of_the_audition = False
        learned_words_qs, words_qs = self.student.words.all(), Word.objects.all()

        if len(words_qs) - len(learned_words_qs) <= 2: king_of_the_audition = True

        context = {
            'student': self.student,
            'king_of_the_audition': king_of_the_audition
        }
        return render(request, 'audition.html', context)


    def post(self, request):
        user_true_variants = loads(request.body)['userTrueVariants']

        for text_word in user_true_variants:
            true_word = Word.objects.get(rus=text_word)
            new_learned_word = LearnWords()
            new_learned_word.word = true_word
            new_learned_word.student = self.student
            new_learned_word.save()

            self.student.words.add(new_learned_word)

        return redirect('/study/audition/')

    def put(self, request):
        status = loads(request.body)['status']

        if status == 'restart':
            self.student.words.clear()
            self.student.save()
            return JsonResponse({}) # to audition
        else:
            return redirect('/')


class SyntaxView(UserMixin, View):
    '''Синтаксис'''
    def get(self, request):
        buildSentences_qs, sentences_qs = self.student.sentence.all(), Sentence.objects.all()
        sentences_set, buildSentences_set = set(), set()

        for sentence in sentences_qs:
            sentences_set.add(sentence)

        for buildSentence in buildSentences_qs:
            buildSentences_set.add(buildSentence.sentence)

        sentence_list = list(sentences_set - buildSentences_set)

        random_index = random.randint(0, len(sentence_list) - 1)

        context = {
            'student': self.student,
            'sentence': sentence_list[random_index],
        }
        return render(request, 'syntax.html', context)


    def post(self, request):
        sentence_id = loads(request.body)['sentence_id']

        sentence = Sentence.objects.get(id=sentence_id)

        new_build_sentence = BuildSentence()
        new_build_sentence.sentence = sentence
        new_build_sentence.student = self.student
        new_build_sentence.save()

        self.student.sentence.add(new_build_sentence)

        return redirect('/study/reading/')
    

class ChatbotView(UserMixin, View):
    '''Чат бот'''
    def get(self, request):
        context = {
            'student': self.student
        }
        return render(request, 'chatbot.html', context)


class PersonalCabView(UserMixin, View):
    '''Личный кабинет'''
    def get(self, request):
        context = {
            'student': self.student,
            'form': ImageForm()
        }
        return render(request, 'personal_cab.html', context)


class DialoView(UserMixin, View):
    '''Мессенджер'''

    def post(self, request, *args, **kwargs):
        body = request.body
        r = requests.post(
            url='http://127.0.0.1:5005/dialo',
            data=body
        )

        return JsonResponse({'status': 200, 'output': r.json()['output']})

    def get(self, request, *args, **kwargs):
        print(request)
        return JsonResponse({'status': 404})


class STTView(UserMixin, View):
    '''speak to text'''
    def post(self, request, *args, **kwargs):
        file = request.FILES['file']
        file_ = file.read()
        with open('file.wav', 'wb') as f:
            f.write(file_)
      
        resp = requests.post(
            url='http://127.0.0.1:4004/stt',
            files={'file': open('file.wav', 'rb')},
            data={'text': request.POST['text'].encode()}
        ).json()

        return JsonResponse({'status': 200, 'text': resp['text'], 'score': round(resp['score'], 2)})

    def get(self, request, *args, **kwargs):
        print(request)
        return JsonResponse({'status': 404})


class TTSView(UserMixin, View):
    '''text to speak'''
    def post(self, request, *args, **kwargs):
        body = request.body
        r = requests.post(
            url='http://127.0.0.1:3003/tts',
            data='татарча сүз '.encode() + body.decode().encode()
        )
        file_url = 'https://learn.saf.tatar/media/' + r.json()['output']
        return JsonResponse({'status': 200, 'file_url': file_url})

    def get(self, request, *args, **kwargs):
        print(request)
        return JsonResponse({'status': 404})