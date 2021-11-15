from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static # para servir mídia
from rest_framework import routers
from nlw2.views import (
    ClassesViewSet,
    TeachersViewSet,
    ConnectionsViewSet,
    SubjectsViewSet
)

# router
router = routers.DefaultRouter()
router.register('nlw2/classes', ClassesViewSet, basename='Classes')
router.register('nlw2/teachers', TeachersViewSet, basename='Teachers')
router.register('nlw2/connections', ConnectionsViewSet, basename='Connections')
router.register('nlw2/subjects', SubjectsViewSet, basename='Subjects')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) # servindo mídia

# para servir estáticos quando rodar manage.py runserver_ip
if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
