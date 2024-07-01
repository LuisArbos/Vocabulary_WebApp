from django.db import models
from vocabulary.models import Word

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password_hash = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class UserVocabulary(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    word = models.ForeignKey(Word, on_delete=models.CASCADE)
    learned = models.BooleanField(default=False)
    learning_progress = models.IntegerField(default=0)
    consecutive_Correct = models.IntegerField(default=0)