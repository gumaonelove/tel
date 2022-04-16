from django.urls import path, include
from rest_framework import routers

from .views import LearnView, ReadingView, AuditionView, SyntaxView
from .api_views import StudentViewSet, TextsViewSet

router = routers.DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'texts', TextsViewSet)

urlpatterns = [
    #api
    path('', include(router.urls)),

    #templates
    path('learn_navigations/', LearnView.as_view(), name='learn_navigations'),  # learn navigations page
    path('reading/', ReadingView.as_view(), name='reading'),  # reading page
    path('audition/', AuditionView.as_view(), name='audition'),  # audition page
    path('syntax/', SyntaxView.as_view(), name='syntax'),  # syntax page
]
