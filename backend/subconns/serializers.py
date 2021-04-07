from rest_framework import serializers
from .models import Subconn, SubconnFollower, SubconnPost,SubconnLike,SubconnComment

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

class SubconnLikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubconnLike
        fields = '__all__'

class SubconnCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubconnComment
        fields = '__all__'