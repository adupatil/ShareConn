from .viewsets import PostViewset,LikeViewset,CommentViewset, SearchPostView
from rest_framework import routers
from django.urls import path, include

router = routers.DefaultRouter()
router.register('api/posts',PostViewset)
router.register('api/posts_likes',LikeViewset)
router.register('api/posts_comments',CommentViewset)
 

urlpatterns = [
    path('', include(router.urls)),
    path('search_posts',SearchPostView.as_view(),name='searchposts'),
    
]




#router.urls
