# Generated by Django 5.0.6 on 2024-08-12 18:31

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('vocabulary', '0003_concept_topic'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='uservocabulary',
            name='user',
        ),
        migrations.RemoveField(
            model_name='uservocabulary',
            name='word',
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(blank=True, max_length=255)),
                ('streak_days', models.IntegerField(default=0)),
                ('languages', models.JSONField(default=list)),
                ('learned', models.BooleanField(default=False)),
                ('learning_progress', models.IntegerField(default=0)),
                ('consecutive_Correct', models.IntegerField(default=0)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('word', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vocabulary.word')),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
        migrations.DeleteModel(
            name='UserVocabulary',
        ),
    ]
