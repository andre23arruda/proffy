from django.conf import settings
from django.templatetags.static import static

from rest_framework import serializers

from .models import Subject, Teacher, Class, Schedule, Connection


def convert_minutes_to_hour(minutes: int):
    '''Converte minutos para horas em formato 99:99'''
    hour = str(minutes // 60).zfill(2)
    minutes = str(minutes % 60).zfill(2)
    return f'{ hour }:{ minutes }'


class SubjectSerializer(serializers.ModelSerializer):
    '''Subject Serializer'''

    class Meta:
        model = Subject
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    '''Teacher Serializer'''

    class Meta:
        model = Teacher
        fields = '__all__'


class ClassSerializer(serializers.ModelSerializer):
    '''Class Serializer'''
    subject_name = serializers.SerializerMethodField()
    def get_subject_name(self, obj):
        return obj.subject.name

    teacher_name = serializers.SerializerMethodField()
    def get_teacher_name(self, obj):
        return obj.teacher.name

    teacher_email = serializers.SerializerMethodField()
    def get_teacher_email(self, obj):
        return obj.teacher.email

    teacher_whatsapp = serializers.SerializerMethodField()
    def get_teacher_whatsapp(self, obj):
        return obj.teacher.whatsapp

    teacher_bio = serializers.SerializerMethodField()
    def get_teacher_bio(self, obj):
        return obj.teacher.bio

    teacher_avatar = serializers.SerializerMethodField()
    def get_teacher_avatar(self, obj):
        if obj.teacher.avatar:
            return obj.teacher.avatar.url
        return settings.BASE_URL + static('images/no-avatar.png')

    class Meta:
        model = Class
        fields = '__all__'


class ScheduleSerializer(serializers.ModelSerializer):
    '''Schedule Serializer'''
    time_start_formatted = serializers.SerializerMethodField()
    def get_time_start_formatted(self, obj):
        return convert_minutes_to_hour(obj.time_start)

    time_end_formatted = serializers.SerializerMethodField()
    def get_time_end_formatted(self, obj):
        return convert_minutes_to_hour(obj.time_end)

    class Meta:
        model = Schedule
        fields = '__all__'


class ConnectionSerializer(serializers.ModelSerializer):
    '''Connection Serializer'''

    class Meta:
        model = Connection
        fields = '__all__'
