from rest_framework import viewsets, filters, generics
from .serializers import PostSerializer,LikeSerializer,CommentSerializer
from .models import Post,Like,Comment
from rest_framework.permissions import IsAuthenticated

class PostViewset(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class LikeViewset(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentViewset(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class SearchPostView(generics.ListAPIView):
    queryset = Post.objects.all()
    permission_classes=[IsAuthenticated]
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['post_title']

