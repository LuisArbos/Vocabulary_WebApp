from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import RegisterForm, LoginForm
from allauth.account.views import SignupView, LoginView
from .models import UserProfile
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework import serializers

def index(request):
    return render(request, 'index.html')

def test_csrf_cookie(request):
    response = HttpResponse('CSRF cookie should be set')
    response.set_cookie('csrftoken', 'test_token_for_testing')
    return response

class SignupSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password1 = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate(self, data):
        if data['password1'] != data['password2']:
            raise serializers.ValidationError("Passwords must match")
        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['email'],
            email=validated_data['email'],
            password=validated_data['password1']
        )
        return user

class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        print("Here")
        serializer = SignupSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"status": "User created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format=None):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(username=email, password=password)
        if user:
            login(request, user)
            # You might want to return a token or session ID here
            return Response({"status": "Login successful"}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST) 

def update_profile(request): #Temporary, not implemented yet but this is a partial function to make it work in a future.
    if request.method == 'POST':
        streak_days = request.POST.get('streak_days')
        languages = request.POST.get('languages')

        profile, created = UserProfile.objects.get_or_create(user=request.user)
        profile.streak_days = streak_days
        profile.languages = languages
        profile.save()

        return redirect('profile')
    return render(request, 'update_profile.html')
