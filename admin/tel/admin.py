from django.contrib import admin
from .models import Grammar, Listening, Reading

class GrammarAdmin(admin.ModelAdmin):
    list_display = ('id', 'text')
    search_fields = ('text',)

class ListeningAdmin(admin.ModelAdmin):
    list_display = ('id', 'word')
    search_fields = ('word',)

class ReadingAdmin(admin.ModelAdmin):
    list_display = ('id', 'text')
    search_fields = ('text',)

admin.site.register(Grammar, GrammarAdmin)
admin.site.register(Listening, ListeningAdmin)
admin.site.register(Reading, ReadingAdmin)
