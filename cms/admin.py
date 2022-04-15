from django.contrib import admin

from .models import Developer, ContentText, PhoneNumber, Email

admin.site.register(Developer)
admin.site.register(ContentText)
admin.site.register(PhoneNumber)
admin.site.register(Email)