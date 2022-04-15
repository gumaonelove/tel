from django.utils.timezone import now

from .models import PhoneNumber, Email


def get_context(request):
    '''Самые популярные контексты теперь тут'''
    context = {
        'year': now().strftime('%Y'),
        'phone': PhoneNumber.objects.all().first(),
        'email': Email.objects.all().first()
    }
    return context