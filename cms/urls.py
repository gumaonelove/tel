from django.urls import path

from cms.views import MainPageView, LoginView

urlpatterns = [
    path('', MainPageView.as_view(), name='main_page'),  # Первая страница
    path('auth/', LoginView.as_view(), name='auth'),
]