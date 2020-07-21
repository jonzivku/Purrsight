from django.contrib import admin
from django.urls import path, include
from user_profiles.views import UserViewSet
from rest_framework import routers, viewsets

# Create a router and register our viewsets with it.



# The API URLs are now determined automatically by the router.
router = routers.DefaultRouter()
router.register(r'', UserViewSet)

urlpatterns = router.urls