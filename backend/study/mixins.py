from django.views.generic import View
from .models import Student


class UserMixin(View):
    '''Миксер user'''
    def dispatch(self, request, *args, **kwargs):
        if not self.request.session.get('user_id'):  # проверяем есть ли в сессии id юзера, если нет
            student = Student.objects.create(
                                             # - значит создаем юзера и сесссию, сессия по
                # создаешь юзера по умолчанию хранится около 2 дней, поэтому пох, но можно поменять:
            )  # self.request.session.set_expiry[60] - 60 секунд хранится сессия
            self.request.session['user_id'] = student.id
        else:
            student = Student.objects.filter(
                id=self.request.session.get('user_id')
            ).first()

        self.student = student
        return super().dispatch(request, *args, **kwargs)
