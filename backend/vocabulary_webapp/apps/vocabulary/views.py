from django.shortcuts import render, HttpResponse, redirect
from .models import Language
from django.utils.translation import activate

# Create your views here.
def language(request):
    items = Language.objects.all()
    return render(request, "test.html", {"tests": items})

def en_practice_view(request):
    context = {
        'current_template': 'language_selection.html'
    }
    return render(request, 'language_selection.html', context)

def es_practice_view(request):
    context = {
        'current_template': 'language_selection_es.html'
    }
    return render(request, 'language_selection_es.html', context)

def change_practice_language(request, language):
    activate(language)
    response = redirect('en_practice_view' if language == 'en' else 'es_practice_view')
    response.set_cookie('django_language', language)
    return response

def en_practice_language_view(request, language):
    context = {'language': language}
    return render(request, 'practice_language.html', context)

def es_practice_language_view(request, language):
    context = {'language': language}
    return render(request, 'practice_language.html', context)

