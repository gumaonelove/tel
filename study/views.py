from django.shortcuts import render, redirect
from django.views import View

from .models import Student


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
            context = {
                'student': Student.objects.get(user=request.user)
            }
            return render(request, 'reading.html', context)
        else:
            return redirect('/')


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