from django.shortcuts import render, HttpResponse
from .models import Test

# Create your views here.
def test(request):
    items = Test.objects.all()
    return render(request, "test.html", {"tests": items})