from django.shortcuts import render, redirect
from django.views import View

from .models import Student


class LearnView(View):
    '''main page view'''
    def get(self, request):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)
            context = {
                'student': student
            }
            return render(request, 'learn.html', context)
        else:
            return redirect('/')


class ReadingView(View):
    '''main page view'''
    def get(self, request):
        if request.user.is_authenticated:
            student = Student.objects.get(user=request.user)
            context = {
                'student': student
            }
            return render(request, 'reading.html', context)
        else:
            return redirect('/')
