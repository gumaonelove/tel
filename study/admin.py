from django.contrib import admin

from .models import Student, Text, Word, ReadText, LearnWords

admin.site.register(Student)
admin.site.register(Text)
admin.site.register(Word)
admin.site.register(ReadText)
admin.site.register(LearnWords)