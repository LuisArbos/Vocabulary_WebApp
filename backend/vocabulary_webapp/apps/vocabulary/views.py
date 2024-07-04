from django.shortcuts import render, HttpResponse
from .models import Language

# Create your views here.
def language(request):
    items = Language.objects.all()
    return render(request, "test.html", {"tests": items})

def practice_view(request):
    return render(request, 'language_selection.html')

def practice_language_view(request, language):
    context = {'language': language}
    return render(request, 'practice.html', context)