from .viewsets import UserViewSet,UserFollowViewSet,UserProfileViewSet,LogoutExView
from rest_framework import routers
from django.urls import path, include   

router = routers.DefaultRouter()
router.register('api/users',UserViewSet)
router.register('api/users_follow',UserFollowViewSet)
router.register('api/users_profile',UserProfileViewSet)

urlpatterns = [ 
    path('', include(router.urls)),
    path('rest-auth/logout',LogoutExView.as_view(),name='rest-logout')
]


#router.urls
