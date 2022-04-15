from django.urls import path
#from study.api import customers_list
from .views import LearnView, ReadingView

urlpatterns = [
    #path('api/', views.customers_list, name='api'),  # test api
    path('learn_navigations/', LearnView.as_view(), name='learn_navigations'),  # learn navigations page
    path('reading/', ReadingView.as_view(), name='reading'),  # reading page
]
