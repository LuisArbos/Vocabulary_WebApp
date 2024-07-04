from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("register/", views.register, name="register"),
    path("login/", views.login_view, name="login"),
    path('change_language/<str:language>/', views.change_language, name='change_language'),
    #path("practice/", views.practice_view, name="practice")
    #path("logout/", views.logout_view, name="logout"),
    
]