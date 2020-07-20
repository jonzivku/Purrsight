from django.conf.urls import url 
from posts import views 
from django.urls import path

from .views import (
    PostListView,
    PostDetailView,
    PostCreateView,
    PostUpdateView,
    PostDeleteView
)

urlpatterns = [
    path('', PostListView.as_view()),
    path('create/', PostCreateView.as_view()),
    path('<pk>', PostDetailView.as_view()),
    path('<pk>/update/', PostUpdateView.as_view()),
    path('<pk>/delete/', PostDeleteView.as_view())
]