from .viewsets import SubconnViewSet,SubconnFollowerViewSet,SubconnPostViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register('api/subconns',SubconnViewSet)
router.register('api/subconns_follower',SubconnFollowerViewSet)
router.register('api/subconns_posts',SubconnPostViewSet)

urlpatterns = router.urls
