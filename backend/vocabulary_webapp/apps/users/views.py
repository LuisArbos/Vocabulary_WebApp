from django.shortcuts import render, HttpResponse, redirect
from django.utils.translation import activate
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegisterForm, LoginForm

# Create your views here.
def index(request):
    return render(request, 'index.html')

'''
def home(request):
    context = {
        'current_template': 'home.html'
    }
    return render(request, 'home.html', context)

def home_es(request):
    context = {
        'current_template': 'home_es.html'
    }
    return render(request, 'home_es.html', context)

def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")
    else:
        form = RegisterForm()
    return render(request, "register.html", {"form": form})    

def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("home")
    else:
        form = AuthenticationForm()
    return render(request, "login.html", {"form": form})

def logout_view(request):
    logout(request)
    return redirect("home")

def change_language(request, language):
    activate(language)
    response = redirect('home_es' if language == 'es' else 'home')
    response.set_cookie('django_language', language)
    return response

'''