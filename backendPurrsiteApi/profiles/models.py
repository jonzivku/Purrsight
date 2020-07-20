from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# u = User.objects.get(username='fsmith') get user object model base on username
# freds_department = u.employee.department set user object model based on department
# Create your models here.

# def profilepic_path(instance, filename):
#     user_id = instance.id
#     return 'profile_picture/{0}'.format(user_id)

class UserProfiles(models.Model):
    #authUser = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.CharField(max_length = 2000, blank=True)
    profilepicture = models.ImageField(upload_to='profile_picture/', blank=True)
    name = models.CharField(max_length = 40, blank=True)

# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         UserProfiles.objects.create(authUser=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.userprofiles.save()