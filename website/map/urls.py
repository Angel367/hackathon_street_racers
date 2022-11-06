from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index_view, name='index'),
    path('contacts/', views.contacts_view, name='contacts'),
    path('map/', views.map_view, name='map'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
