from django.shortcuts import render, HttpResponse
from .models import Language

# Create your views here.
def language(request):
    items = Language.objects.all()
    return render(request, "test.html", {"tests": items})