from rest_framework import viewsets, filters, generics
from .serializers import UserSerializer,UserFollowSerializer,UserProfileSerializer, UserProfileReadOnlySerializer
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
     

    def get_serializer_class(self):
        if self.action == "create":
            return UserProfileSerializer
        return UserProfileReadOnlySerializer

class LogoutExView(LogoutView):
    
    authentication_classes = (authentication.TokenAuthentication,)

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class SearchUserView(generics.ListAPIView):
    queryset = User.objects.all()
    permission_classes=[IsAuthenticated]
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ('username','email')