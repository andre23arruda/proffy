from django.contrib import admin
from .models import Subject

@admin.register(Subject)
class SubjectRegister(admin.ModelAdmin):
    list_per_page = 25
    ordering = ['id']


# @admin.register(CollectItem)
# class CollectItemRegister(admin.ModelAdmin):
#     # list_display = ('id', 'name', 'email', 'whatsapp')
#     # list_display_links = ('id', 'name')
#     # search_fields = ('name',)
#     list_per_page = 25
