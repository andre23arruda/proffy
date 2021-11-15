from django.contrib import admin
from .models import Class, Schedule, Subject, Teacher


@admin.register(Class)
class ClassRegister(admin.ModelAdmin):
    list_per_page = 25
    ordering = ['id']


@admin.register(Schedule)
class ScheduletRegister(admin.ModelAdmin):
    list_per_page = 25
    ordering = ['id']


@admin.register(Subject)
class SubjectRegister(admin.ModelAdmin):
    list_per_page = 25
    ordering = ['id']


@admin.register(Teacher)
class TeacherRegister(admin.ModelAdmin):
    list_per_page = 25
    ordering = ['id']
