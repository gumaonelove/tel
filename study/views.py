from django.shortcuts import render, redirect
from django.views import View

from .models import Student, Text


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
                text = not_reading_texts[0]
            else:
                king_of_the_reading = True
                text = texts.first()

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
            context = {
                'student': Student.objects.get(user=request.user)
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
                'student': Student.objects.get(user=request.user)
            }
            return render(request, 'personal_cab.html', context)
        else:
            return redirect('/')