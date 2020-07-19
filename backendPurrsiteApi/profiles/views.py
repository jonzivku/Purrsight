from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status, generics
from profiles.models import UserProfiles
from profiles.serializers import ProfileSerializer
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser


# Create your views here.

def posts_list(request):
    if request.method == 'POST':
        profile_data = MultiPartParser().parse(request)
        profile_serializer = ProfileSerializer(data=profile_data)
        if post_serializer.is_valid():
            post_serializer.save()
            return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def view_profile(request, *args, **kwargs):

    return


class profileUpload(generics.ListCreateAPIView):
    parser_class = (MultiPartParser, FormParser,)
    serializer_class = ProfileSerializer

    def edit_profile(request, format = None, *args, **kwargs):
        if request.method == 'POST':
            profile_serializer = ProfileSerializer(data=request.data)
            return HttpResponse(status=status.HTTP_201_CREATED)
        return