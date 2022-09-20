from django.shortcuts import render
from django.views import View


from .models import Developer, ContentText


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
