from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView,
)
from rest_framework import generics
from django.views import View
from rest_framework.views import APIView
from django.views.generic.edit import CreateView
from posts.models import Posts
from .serializers import PostSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.auth import get_user_model

class PostListView(ListAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny, )


class PostDetailView(RetrieveAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny, )


def create_post(request):
    print('entering create_post')
    post = Posts.objects.get(pk=pk)
    request_instance = get_object(self)
    print(request_instance)
    print(user_instance)
    request_instance.author = request.user
    print(request_instance)

    request_instance.save()
    user_instance = User.objects.get(id=request.user.id)
    print('user model is:')
    print(user_instance)
    print('author model is:')
    print(user_instance)
    return

class PostCreateView(generics.CreateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    parser_class = parser_classes = (MultiPartParser, FormParser)
    permission_classes = (permissions.IsAuthenticated, )
    model = Posts    
    def create_post(self, request, format = None, *args, **kwargs):
        print('entering create_post')
        post = Posts.objects.get(pk=pk)
        request_instance = get_object(self)
        print(request_instance)
        print(user_instance)
        request_instance.author = request.user
        print(request_instance)

        request_instance.save()
        user_instance = User.objects.get(id=request.user.id)
        print('user model is:')
        print(user_instance)
        print('author model is:')
        print(user_instance)
        
        return HttpResponse( status=status.HTTP_200_OK)


class PostUpdateView(UpdateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated, )

class PostDeleteView(DestroyAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated, )