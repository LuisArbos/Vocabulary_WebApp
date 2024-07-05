from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("es/", views.home_es, name="home_es"),
    path('change-language/<str:language>/', views.change_language, name='change_language')    
]