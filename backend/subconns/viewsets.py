from rest_framework import permissions, viewsets
from .serializers import SubconnSerializer,SubconnFollowerSerializer,SubconnPostSerializer
from .models import Subconn, SubconnFollower, SubconnPost
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