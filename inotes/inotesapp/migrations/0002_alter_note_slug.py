# Generated by Django 4.2.16 on 2024-11-10 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inotesapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='slug',
            field=models.SlugField(blank=True, null=True, unique=True),
        ),
    ]
