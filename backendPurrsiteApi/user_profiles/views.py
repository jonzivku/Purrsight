from django.contrib.auth.models import User
from user_profiles.models import UserProfile
from user_profiles.serializers import UserProfileSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import parser_classes
from django.shortcuts import get_object_or_404
from rest_framework.authentication import TokenAuthentication
from rest_framework.decorators import action

# # Create your views here.

# def posts_list(request):
#     if request.method == 'POST':
#         profile_data = MultiPartParser().parse(request)
#         profile_serializer = ProfileSerializer(data=profile_data)
#         if post_serializer.is_valid():
#             post_serializer.save()
#             return JsonResponse(post_serializer.data, status=status.HTTP_201_CREATED) 
#         return JsonResponse(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# def view_profile(request, *args, **kwargs):

#     return
    # def edit_profile(request, format = None, *args, **kwargs):
    #     if request.method == 'POST':
    #         profile_serializer = ProfileSerializer(data=request.data)
    #         return HttpResponse(status=status.HTTP_201_CREATED)
    #     return 


#class to view user profile information
#returns bio, name, and url to profile picture


class UserViewSet(viewsets.ViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    parser_classes = [MultiPartParser]
    authentication_classes = [TokenAuthentication]
    # parser_class = (MultiPartParser, FormParser,)
    # serializer_class = ProfileSerializer

    # def view_profile(request,format =None, *args, **kwargs):
    #     return
    # """
    # Example empty viewset demonstrating the standard
    # actions that will be handled by a router class.

    # If you're using format suffixes, make sure to also include
    # the `format=None` keyword argument for each action.
    # """

    def list(self, request):
        
        user = UserProfile.objects.get(pk=request.user.id)
        print(user)
        print('\n')
        print(user.name)
        print('\n')
        print(user.bio)
        print('\n')
        print(user)
        serializer = UserProfileSerializer(user)        
        return Response(serializer.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
    
        return Response()

    def update(self, request, pk=None):
        print(request.data['profilepicture'])
        print(request.user.id)
        user_to_update = UserProfile.objects.get(pk=request.user.id)
        user_auth_fields_to_update = User.objects.get(pk=request.user.id)
        user_to_update.authUser = user_auth_fields_to_update
        user_to_update.bio =request.data['bio']
        user_to_update.name =request.data['name']
        user_to_update.profilepicture =request.data['profilepicture']
        user_to_update.save()
        return Response()

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass