from django.db import models

class ResponseModel(models.Model):
    # desig_choices = ['Student','Faculty']
    # department_choices = ['cse','csm','cic','cso','it','aiml','aids','eee','ece','mech','civil']
    # type_choices = ['Academic','Non-Academic','Discrimination']
    name = models.CharField(max_length=200)
    registration = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    desig = models.CharField(max_length=20)
    department = models.CharField(max_length=5)
    year = models.IntegerField()
    type = models.CharField(max_length=200)
    grevience = models.CharField(max_length=500)

class CounsellorModel(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    id = models.CharField(max_length=200,primary_key=True)

class StudentModel(models.Model):
    name = models.CharField(max_length=200)
    registration = models.CharField(max_length=200)
    department = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    counsellor = models.CharField(max_length=200)

# Create your models here.
