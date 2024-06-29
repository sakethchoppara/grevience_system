from django.contrib import admin
from .models import LostItems , FoundItems
# from .serializer import LostItemsSerializer,FoundItemsSerializer

admin.site.register(LostItems)
admin.site.register(FoundItems)
# admin.site.register(LostItemsSerializer)

# Register your models here.
