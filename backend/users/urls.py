from .viewsets import UserViewSet,UserFollowViewSet,UserProfileViewSet,LogoutExView, FacebookLogin, SearchUserView
from rest_framework import routers
from django.urls import path, include
from django.conf.urls import url 
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register('api/users',UserViewSet)
router.register('api/users_follow',UserFollowViewSet)
router.register('api/users_profile',UserProfileViewSet)

urlpatterns = [ 
    path('', include(router.urls)),
    path('rest-auth/logout',LogoutExView.as_view(),name='rest-logout'),
    url(r'^rest-auth/facebook/$', FacebookLogin.as_view(), name='fb_login'),
    path('fb/', TemplateView.as_view(template_name="fb.html")),
    path('search_users',SearchUserView.as_view(),name='searchposts'),
]


#router.urls

