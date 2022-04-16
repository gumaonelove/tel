import random
from json import loads

from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views import View

from .models import Student, Text, Word, LearnWords, Sentence
from .forms import ImageForm


class LearnView(View):
    '''main page view'''
    def get(self, request):
        if request.user.is_authenticated:
            context = {
                'student': Student.objects.get(user=request.user)
            }
            return render(request, 'learn.html', context)
        else:
            return redirect('/')


class ReadingView(View):
    '''main page view'''
    def get(self, request):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)
            student_texts = student.texts.all()
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
                'student': student,
                'text': text,
                'king_of_the_reading': king_of_the_reading
            }
            return render(request, 'reading.html', context)
        else:
            return redirect('/')


class AuditionView(View):
    '''Аудирование'''
    def get(self, request):
        if request.user.is_authenticated:
            student  = Student.objects.get(user=request.user)
            king_of_the_audition = False
            learned_words_qs, words_qs = student.words.all(), Word.objects.all()

            if len(words_qs) - len(learned_words_qs) <= 2: king_of_the_audition = True

            context = {
                'student': student,
                'king_of_the_audition': king_of_the_audition
            }
            return render(request, 'audition.html', context)
        else:
            return redirect('/')

    def post(self, request):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)

            user_true_variants = loads(request.body)['userTrueVariants']

            for text_word in user_true_variants:
                true_word = Word.objects.get(tatar=text_word)
                new_learned_word = LearnWords()
                new_learned_word.word = true_word
                new_learned_word.student = student
                new_learned_word.save()

                student.words.add(new_learned_word)

            return redirect('/study/audition/')
        else:
            return redirect('/')

    def put(self, request):
        if request.user.is_authenticated:
            status = loads(request.body)['status']

            if status == 'restart':
                student = Student.objects.get(user=request.user)

                student.words.clear()
                student.save()
                return JsonResponse({}) # to audition
            else:
                return redirect('/')
        else:
            return redirect('/')


class SyntaxView(View):
    '''Синтаксис'''
    def get(self, request):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)
            sentences = Sentence.objects.all()

            sentence_list = []

            for sentence in sentences:
                sentence_list.append(sentence.text)

            random_index = random.randint(0, len(sentence_list) - 1)
            context = {
                'student': student,
                'sentence': sentence_list[random_index]
            }
            return render(request, 'syntax.html', context)
        else:
            return redirect('/')


class ChatbotView(View):
    '''Чат бот'''
    def get(self, request):
        if request.user.is_authenticated:
            context = {
                'student': Student.objects.get(user=request.user)
            }
            return render(request, 'chatbot.html', context)
        else:
            return redirect('/')


class PersonalCabView(View):
    '''Личный кабинет'''

    def get(self, request):
        if request.user.is_authenticated:
            context = {
                'student': Student.objects.get(user=request.user),
                'form': ImageForm()
            }
            return render(request, 'personal_cab.html', context)
        else:
            return redirect('/')

    def put(self, request):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)
            data = loads(request.body)

            user = student.user
            user.username = data['login']
            user.save()

            student.user = user
            student.surname = data['surname']
            student.name = data['name']
            student.lastname = data['lastname']
            try:
                student.birth_day_date = data['birth_day_date']
            except:
                student.birth_day_date = None
                print('Ошибка при сохранении даты рождения')
            student.save()

            return redirect('/study/profile/')
        else:
            return redirect('/')


    def post(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)

            form = ImageForm(request.POST, request.FILES)
            form.save(commit=True)

            student.photo = form.instance
            student.save()

            return redirect('/study/profile/')
        else:
            return redirect('/')