from json import loads

from django.shortcuts import render, redirect
from django.views import View
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

from cms.models import Developer, ContentText


class MainPageView(View):
    '''main page view'''
    def get(self, request):
        developers = Developer.objects.all().order_by('rang')
        contents = ContentText.objects.all()

        context = {
            'developers': developers,
            'contents': contents
        }
        return render(request, 'main_page.html', context)


class LoginView(View):
    '''Авторизация по логину и паролю'''
    def get(self, request):
        return render(request, 'auth.html')  # Страница входа

    def post(self, request, *args, **kwargs):
        action = loads(request.body)['action']
        username = loads(request.body)['username']
        password = loads(request.body)['password']

        if action == 'entry' or User.objects.filter(username=username):
            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return redirect('/study/learn_navigations/')
        else:
            new_user = User()
            new_user.username = username
            new_user.set_password(password)
            new_user.save()

            user = authenticate(username=username, password=password)
            login(request, user)

            return redirect('/study/learn_navigations/')

        return render(request, 'main_page.html')  # Вход в систему
