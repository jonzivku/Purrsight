"""purrsight URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from users import views as user_views
from pages.views import feed_view

urlpatterns = [
    path('', user_views.login_view, name='splash'),
    path('admin/', admin.site.urls),
    path('register/', user_views.register_view, name='register'),
    path('login/', user_views.login_view, name='login'),
	path('feed/', feed_view, name='feed'),
]
