from rest_framework import serializers
from .models import LostItems,FoundItems

class LostItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = LostItems
        fields =['name', 
                  'email',
                  'contact',
                  'itemName',
                  'itemType',
                  'keywords',
                  'location',
                  'time',
                  'date',
                  'image',
                  'description']
        

class FoundItemsSerializer(serializers.ModelSerializer):
    class Meta:
            model = FoundItems
            fields = ['name', 
                  'email',
                  'contact',
                  'itemName',
                  'itemType',
                  'keywords',
                  'location',
                  'time',
                  'date',
                  'image',
                  'description']