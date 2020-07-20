from rest_framework import serializers 
from profiles.models import UserProfiles

class ProfileSerializer(serializers.ModelSerializer):
 
    class Meta:
        model = UserProfiles
        fields = ('bio',
                  'name',
                  'profilepicture',
        )                