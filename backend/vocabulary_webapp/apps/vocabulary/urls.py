from django.urls import path
from . import views

urlpatterns = [
    path('en/practice/', views.en_practice_view, name='en_practice_view'),
    path('es/practice/', views.es_practice_view, name='es_practice_view'),
    path('change-practice-language/<str:language>/', views.change_practice_language, name='change_practice_language'),
    path('en/practice-language/<str:language>/', views.en_practice_language_view, name='en_practice_language'),
    path('es/practice-language/<str:language>/', views.es_practice_language_view, name='es_practice_language')    
]