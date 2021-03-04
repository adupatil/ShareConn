from .viewsets import PostViewset,LikeViewset,CommentViewset
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register('api/posts',PostViewset)
router.register('api/posts_likes',LikeViewset)
router.register('api/posts_comments',CommentViewset)


urlpatterns = router.urls
