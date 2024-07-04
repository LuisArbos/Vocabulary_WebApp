from django.urls import path
from . import views

urlpatterns = [
    path('practice/', views.practice_view, name='practice'),
    path('practice/<str:language>/', views.practice_language_view, name='practice_language')
]