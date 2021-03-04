from rest_framework import viewsets
from .serializers import PostSerializer,LikeSerializer,CommentSerializer
from .models import Post,Like,Comment

class PostViewset(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class LikeViewset(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentViewset(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
