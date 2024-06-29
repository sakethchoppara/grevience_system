from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser,FormParser
from django.http import JsonResponse
from .serializer import LostItemsSerializer,FoundItemsSerializer
from .search import SearchItem
import time


class LostItemResponse(APIView):
    def post(self,request):
            parser_classes = (MultiPartParser, FormParser)
            serializer = LostItemsSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                  instance = serializer.save()
                  return Response({"status":True,
                                   'id':instance.submissionID})
            return Response({"status":False})


class FoundItemResponse(APIView):
      def post(self,request):
            parser_classes = (MultiPartParser,FormParser)
            serializer = FoundItemsSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                  instance = serializer.save()
                  return Response({"status":True,
                                   'id':instance.submissionID})
            return Response({'status':False})



class SearchItems(APIView):
      def post(self,request):
            value = SearchItem(request.data)
            return JsonResponse({'data':value})