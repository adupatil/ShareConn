from rest_framework import viewsets
from .serializers import PostSerializer,LikeSerializer,CommentSerializer
from .models import Post,Like,Comment
from rest_framework.permissions import IsAuthenticated
#from django.http import HttpResponse
from rest_framework.parsers import FormParser,MultiPartParser

class PostViewset(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    parser_classes = [FormParser,MultiPartParser]

    queryset = Post.objects.all()
    serializer_class = PostSerializer

    # def post(self, request, *args, **kwargs):
    #     post_title = request.data['post_title']
    #     post_type = request.data['post_type']
    #     category = request.data['category']
    #     post_text = request.data['post_text']
    #     user_id = request.data['user_id']

    #     Post.objects.create(post_title=post_title,post_type=post_type,category=category,post_text=post_text,
    #     user_id=user_id)

    #     return HttpResponse({"message": "Post created",
    #     "status":200})
class LikeViewset(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]

    queryset = Like.objects.all()
    serializer_class = LikeSerializer

class CommentViewset(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]

    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
