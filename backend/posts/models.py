from django.db import models
from users.models import User
from subconns.models import Subconn
from django.db.models import F



class Post(models.Model):
    # post_id= models.AutoField()
    post_title= models.TextField(max_length=500)
    user_id= models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_id')
    num_likes = models.PositiveBigIntegerField(default=0)
    num_comments = models.PositiveBigIntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    post_type= models.FileField(upload_to=f"posts/{F('user.username')}",verbose_name="path",blank=True)
    post_text=models.TextField(max_length=1000, blank=True)
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.post_title

class Like(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user_id', 'post_id'], name='post_like_unique')
        ]

class Comment(models.Model):
    user_id = models.ForeignKey(User,on_delete=models.CASCADE)
    post_id = models.ForeignKey(Post,on_delete=models.CASCADE)
    comment = models.TextField(max_length=400)

    def __str__(self):
        return self.user_id.username + 'posted' + self.post_id.post_title