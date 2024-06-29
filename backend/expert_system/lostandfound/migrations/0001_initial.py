# Generated by Django 5.0.1 on 2024-06-22 16:03

import lostandfound.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoundItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('submissionID', lostandfound.models.FoundIDField(max_length=100)),
                ('name', models.CharField(default=None, max_length=200)),
                ('email', models.EmailField(default=None, max_length=50)),
                ('contact', models.IntegerField(default=None, max_length=50)),
                ('itemName', models.CharField(default=None, max_length=200)),
                ('itemType', models.CharField(default=None, max_length=200)),
                ('keywords', models.CharField(default=None, max_length=200)),
                ('location', models.CharField(default=None, max_length=100)),
                ('time', models.CharField(default=None, max_length=200)),
                ('date', models.CharField(default=None, max_length=200)),
                ('image', models.ImageField(blank=True, max_length=200, null=True, upload_to='founditems/')),
                ('description', models.CharField(default=None, max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='LostItems',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('submissionID', lostandfound.models.LostIDField(max_length=100)),
                ('name', models.CharField(default=None, max_length=200)),
                ('email', models.EmailField(default=None, max_length=50)),
                ('contact', models.IntegerField(default=None, max_length=50)),
                ('itemName', models.CharField(default=None, max_length=200)),
                ('itemType', models.CharField(default=None, max_length=200)),
                ('keywords', models.CharField(default=None, max_length=200)),
                ('location', models.CharField(default=None, max_length=100)),
                ('time', models.CharField(default=None, max_length=200)),
                ('date', models.CharField(default=None, max_length=200)),
                ('image', models.ImageField(blank=True, max_length=200, null=True, upload_to='lostitems/')),
                ('description', models.CharField(default=None, max_length=500)),
            ],
        ),
    ]
