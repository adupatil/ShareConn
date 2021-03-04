from rest_framework import serializers
from .models import Subconn, SubconnFollower, SubconnPost

class SubconnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subconn
        fields = '__all__'

class SubconnFollowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubconnFollower
        fields = '__all__'

class SubconnPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubconnPost
        fields = '__all__'
