from rest_framework import viewsets, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
import json

from .models import Subject, Teacher, Class, Schedule, Connection
from .serializers import SubjectSerializer, TeacherSerializer, ClassSerializer, ScheduleSerializer, ConnectionSerializer


def convert_hour_to_minutes(hour_text: str):
    '''Converte horas em formato 99:99 para minutos'''
    hour_text = hour_text.split(':')
    hour = 60 * int(hour_text[0])
    minutes = int(hour_text[1])
    return hour + minutes


def schedule_map(schedule_info: list, reference_class: Class):
    '''Cria Schedule instance a partir de uma lista'''
    print(schedule_info)
    schedule_info = json.loads(schedule_info)
    if schedule_info:
        for schedule in schedule_info:
            Schedule.objects.create(
                week_day=schedule['week_day'],
                time_start=convert_hour_to_minutes(schedule['time_start']),
                time_end=convert_hour_to_minutes(schedule['time_end']),
                reference_class=reference_class,
            )


class ClassesViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Classes to be viewed or edited'''
    serializer_class = ClassSerializer
    pagination_class = None
    http_method_names = ['get', 'post']
    parser_classes = [MultiPartParser, FormParser]

    def get_queryset(self):
        '''List classes'''
        queryset = Class.objects.all()
        query_params = self.request.query_params.dict()
        if 'filter_classes' in query_params and 'week_day' in query_params and 'subject' in query_params and 'time' in query_params:
            time_start = convert_hour_to_minutes(query_params['time'])
            print(time_start)
            queryset = queryset.filter(
                subject=query_params['subject'],
                schedule__week_day=query_params['week_day'],
                # schedule__time_start__lte=time_start,
                schedule__time_end__gte=time_start
            )
        return queryset

    def create(self, serializer):
        '''Create Teacher'''
        form_data = serializer.data

        teacher = Teacher(
            name=form_data['name'],
            email=form_data['email'],
            whatsapp=form_data['whatsapp'],
            bio=form_data['bio'],
        )
        if form_data['avatar'] != 'null':
            teacher.avatar = form_data['avatar']
        teacher.save()

        class_instance = Class.objects.create(
            subject_id=form_data['subject'],
            cost=form_data['cost'],
            teacher=teacher,
        )

        schedule_map(form_data['scheduleInfo'], class_instance)

        response = { 'message': 'Teacher, Class and Schedule created.' }
        return Response(response, status=status.HTTP_200_OK)


class TeachersViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Teachers to be viewed or edited'''
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    http_method_names = ['get',]


class ConnectionsViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Connections to be viewed or edited'''
    serializer_class = ConnectionSerializer
    http_method_names = ['get', 'post']

    def list(self, request):
        queryset = Connection.objects.all()
        return Response({'total': queryset.count()})


class SubjectsViewSet(viewsets.ModelViewSet):
    '''API endpoint that allows Connections to be viewed or edited'''
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    http_method_names = ['get', 'post']
