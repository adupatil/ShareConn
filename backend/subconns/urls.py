from .viewsets import SubconnViewSet,SubconnFollowerViewSet,SubconnPostViewSet,SubconnCommentViewSet,SubconnLikeViewSet
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register('api/subconns',SubconnViewSet)
router.register('api/subconns_follower',SubconnFollowerViewSet)
router.register('api/subconns_posts',SubconnPostViewSet)
router.register('api/subconns_likes',SubconnLikeViewSet)
router.register('api/subconns_comments',SubconnCommentViewSet)

urlpatterns = router.urls
