from django.conf.urls import url 
from django.urls import path

from profiles import views 
 
urlpatterns = [ 
    path('', views.profileUpload.as_view()),
    path('<pk>', views.view_profile),
]