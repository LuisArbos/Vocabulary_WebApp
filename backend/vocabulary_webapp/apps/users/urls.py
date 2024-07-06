from django.urls import path, re_path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    re_path(r'^(?:.*)/?$', views.index, name='index')
    #path('<path:path>', views.index, name='index'),
    #path("en/", views.home_es, name="home"),
    #path("es/", views.home_es, name="home_es"),
    #path('change-language/<str:language>/', views.change_language, name='change_language')    
]