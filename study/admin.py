from django.contrib import admin

from .models import Student, Text
from .forms import TextsAdmin

admin.site.register(Student)
admin.site.register(Text, TextsAdmin)
