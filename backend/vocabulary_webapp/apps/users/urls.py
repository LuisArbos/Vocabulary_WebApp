from django.urls import path, re_path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    re_path(r'^(?:.*)/?$', views.index, name='index'),
    path('signup/', views.CustomSignupView.as_view(), name='signup'),
    path('login/', views.CustomLoginView.as_view(), name='login'),
    path("test/", views.test_csrf_cookie, name="test_csrf_cookie"),
    #path('<path:path>', views.index, name='index'),
    #path("en/", views.home_es, name="home"),
    #path("es/", views.home_es, name="home_es"),
    #path('change-language/<str:language>/', views.change_language, name='change_language')    
]