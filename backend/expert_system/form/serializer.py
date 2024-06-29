from rest_framework import serializers
from .models import ResponseModel

class ResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResponseModel
        fields = ['name',
                  'registration',
                  'email',
                  'desig',
                  'department',
                  'year',
                  'type',
                  'grevience']