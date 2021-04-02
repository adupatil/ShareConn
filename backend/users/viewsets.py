from rest_framework import viewsets
from .serializers import UserSerializer,UserFollowSerializer,UserProfileSerializer
from .models import User, UserProfile, UserFollow
from rest_framework import authentication
from rest_framework.permissions import IsAuthenticated
from rest_auth.views import LogoutView
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
class UserViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]

    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserFollowViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]

    queryset = UserFollow.objects.all()
    serializer_class = UserFollowSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated]
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class LogoutExView(LogoutView):
    
    authentication_classes = (authentication.TokenAuthentication,)

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter