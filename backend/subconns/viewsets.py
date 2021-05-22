from rest_framework import permissions, viewsets, filters, generics
from .serializers import (SubconnSerializer,SubconnFollowerSerializer,SubconnPostSerializer,
                        SubconnCommentSerializer,SubconnLikeSerializer)
from .models import Subconn, SubconnFollower, SubconnPost,SubconnLike,SubconnComment
from rest_framework.permissions import IsAuthenticated


class SubconnViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = Subconn.objects.all()
    serializer_class = SubconnSerializer

    # def update(self, request, *args, **kwargs):
    #     kwargs['partial'] = True
    #     return super().update(request, *args, **kwargs)

class SubconnFollowerViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = SubconnFollower.objects.all()
    serializer_class = SubconnFollowerSerializer

class SubconnPostViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = SubconnPost.objects.all()
    serializer_class = SubconnPostSerializer

class SubconnLikeViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = SubconnLike.objects.all()
    serializer_class = SubconnLikeSerializer

class SubconnCommentViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = SubconnComment.objects.all()
    serializer_class = SubconnCommentSerializer

class SearchSubconnView(generics.ListAPIView):
    queryset = Subconn.objects.all()
    permission_classes=[IsAuthenticated]
    serializer_class = SubconnSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['subconn_name']
