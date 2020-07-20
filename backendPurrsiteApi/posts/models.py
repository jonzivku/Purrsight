from django.db import models
from django.contrib.auth.models import User

class Posts(models.Model):
    description = models.CharField(max_length=200,blank=False, default='')
    picture = models.ImageField(upload_to='posts/', blank=True, default='')
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.id
    