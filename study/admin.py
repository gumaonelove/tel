from django.contrib import admin

from .models import Student, Texts
from .forms import TextsAdmin

admin.site.register(Student)
admin.site.register(Texts, TextsAdmin)
