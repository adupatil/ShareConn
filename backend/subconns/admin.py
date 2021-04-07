from django.contrib import admin
from .models import Subconn, SubconnFollower, SubconnPost,SubconnComment,SubconnLike 

# Register your models here.
admin.site.register(Subconn)
admin.site.register(SubconnFollower)
admin.site.register(SubconnPost)
admin.site.register(SubconnLike)
admin.site.register(SubconnComment)