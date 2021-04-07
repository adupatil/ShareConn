from django.db import models
from users.models import User
# from posts.models import Post


class Subconn(models.Model):
    subconn_admin = models.ForeignKey(User,on_delete=models.CASCADE,related_name='subconn_admin')
    subconn_name = models.CharField(max_length=100,unique=True)
    num_subconn_followers = models.PositiveBigIntegerField(default=0)

    def __str__(self):
        return self.subconn_name

class SubconnPost(models.Model):
    subconn = models.ForeignKey(Subconn, on_delete=models.CASCADE)
    # post_id= models.AutoField()
    post_title= models.TextField(max_length=500)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    num_likes = models.PositiveBigIntegerField(default=0)
    num_comments = models.PositiveBigIntegerField(default=0)
    date_created = models.DateTimeField(auto_now_add=True)
    post_type= models.FileField(upload_to=f"subconn_posts/",verbose_name="path",blank=True)
    post_text=models.TextField(max_length=1000, blank=True)
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.post_title


class SubconnLike(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    post = models.ForeignKey(SubconnPost,on_delete=models.CASCADE)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'post'], name='subconn_post_like_unique')
        ]

class SubconnComment(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    post = models.ForeignKey(SubconnPost,on_delete=models.CASCADE)
    comment = models.TextField(max_length=400)

    def __str__(self):
        return self.user.username + 'posted' + self.post.post_title

class SubconnFollower(models.Model):
  follower_s = models.ForeignKey(User, on_delete=models.CASCADE, related_name='follower_s')
  followee_s = models.ForeignKey(Subconn, on_delete=models.CASCADE, related_name='followee_s')

  class Meta:
        constraints = [
            models.UniqueConstraint(fields=['follower_s', 'followee_s'], name='subconn_follow_unique')
        ]

  def __str__(self):
    return self.followee_s.subconn_name + " - Followed By -> " + self.follower_s.username

