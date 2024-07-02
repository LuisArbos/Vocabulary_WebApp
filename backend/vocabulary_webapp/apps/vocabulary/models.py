from django.db import models

# Create your models here.
"""class Test(models.Model):
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)"""

class Language(models.Model):
    name = models.CharField(max_length=50, unique=True) 
    code = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name

class Concept(models.Model):
    concept = models.CharField(max_length=100, unique=True)
    topic = models.IntegerField(default=0)

class Word(models.Model):
    word = models.CharField(max_length=100)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)
    gender = models.CharField(max_length=20, null=True, blank=True)
    singular_form = models.CharField(max_length=100, null=True, blank=True)
    plural_form = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"{self.word} ({self.language.code})"

class Definition(models.Model):
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)
    translation_en = models.CharField(max_length=255, null=True, blank=True)
    translation_es = models.CharField(max_length=255, null=True, blank=True)
    definition_en = models.TextField(null=True, blank=True)
    definition_es = models.TextField(null=True, blank=True)
    example_sentence = models.TextField(null=True, blank=True)
    example_translation_en = models.TextField(null=True, blank=True)
    example_translation_es = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"Definition for {self.word.word} ({self.word.language.code})"
