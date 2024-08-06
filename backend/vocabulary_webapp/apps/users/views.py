from django.shortcuts import render, HttpResponse, redirect
from django.utils.translation import activate
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegisterForm, LoginForm
from allauth.account.views import SignupView, LoginView
from django.urls import path

def index(request):
    return render(request, 'index.html')

def test_csrf_cookie(request):
    response = HttpResponse('CSRF cookie should be set')
    response.set_cookie('csrftoken', 'test_token_for_testing')
    return response

class CustomSignupView(SignupView):
    template_name = 'signup.html'

class CustomLoginView(LoginView):
    template_name = 'login.html'  

