import random
from json import loads

from django.shortcuts import render, redirect
from django.views import View

from .models import Student, Text, Word
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
                random_index = random.randint(0, len(texts))
                text = texts[random_index]
            else:
                king_of_the_reading = True
                random_index = random.randint(0, len(texts))
                text = texts[random_index]

            context = {
                'student': student,
                'text': text,
                'king_of_the_reading': king_of_the_reading
            }
            return render(request, 'reading.html', context)
        else:
            return redirect('/')


    def post(self, request):
        print(request)


class AuditionView(View):
    '''Аудирование'''
    def get(self, request):
        if request.user.is_authenticated:
            student  = Student.objects.get(user=request.user)

            context = {
                'student': student
            }
            return render(request, 'audition.html', context)
        else:
            return redirect('/')


class SyntaxView(View):
    '''Синтаксис'''
    def get(self, request):
        if request.user.is_authenticated:
            context = {
                'student': Student.objects.get(user=request.user)
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