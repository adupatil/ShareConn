from django.contrib import admin
from .models import Subconn, SubconnFollower, SubconnPost

# Register your models here.
admin.site.register(Subconn)
admin.site.register(SubconnFollower)
admin.site.register(SubconnPost)