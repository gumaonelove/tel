from django.urls import path, include
from rest_framework import routers

from .views import LearnView, ReadingView, AuditionView, SyntaxView, ChatbotView, PersonalCabView
from .api_views import TextsViewSet, WordViewSet, GetWordsForAuditionApi

router = routers.DefaultRouter()
router.register(r'texts', TextsViewSet) #texts rest api
router.register(r'words', WordViewSet) # words rest api

urlpatterns = [
    #api
    path('', include(router.urls)),
    path('get_words/', GetWordsForAuditionApi.as_view(), name='get_words'),  # words api

    #templates
    path('learn_navigations/', LearnView.as_view(), name='learn_navigations'),  # learn navigations page
    path('reading/', ReadingView.as_view(), name='reading'),  # reading page
    path('audition/', AuditionView.as_view(), name='audition'),  # audition page
    path('syntax/', SyntaxView.as_view(), name='syntax'),  # syntax page
    path('chatbot/', ChatbotView.as_view(), name='chatbot'),  # chatbot page
    path('profile/', PersonalCabView.as_view(), name='profile'),  # profile page
]