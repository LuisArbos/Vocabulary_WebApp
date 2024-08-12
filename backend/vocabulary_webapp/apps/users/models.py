from django.db import models
from ..vocabulary.models import Word
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) #Relate this model to the auth default so I only need to handle additional parameters.
    streak_days = models.IntegerField(default=0)
    languages = models.JSONField(default=list)
    word = models.ForeignKey(Word, on_delete=models.CASCADE) #Need this to relate to word model.
    learned = models.BooleanField(default=False)
    learning_progress = models.IntegerField(default=0)
    consecutive_Correct = models.IntegerField(default=0)
    

    def __str__(self):
        return self.user.username