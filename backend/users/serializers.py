from rest_framework import serializers
from .models import User, UserProfile, UserFollow

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ['is_superuser','is_staff','is_active','date_joined','groups','dob' ]

class UserFollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserFollow
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'