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
    post = models.ForeignKey('posts.Post', on_delete=models.CASCADE)

class SubconnFollower(models.Model):
  follower_s = models.ForeignKey(User, on_delete=models.CASCADE, related_name='follower_s')
  followee_s = models.ForeignKey(Subconn, on_delete=models.CASCADE, related_name='followee_s')

  class Meta:
        constraints = [
            models.UniqueConstraint(fields=['follower_s', 'followee_s'], name='subconn_follow_unique')
        ]

  def __str__(self):
    return self.followee_s.subconn_name + " - Followed By -> " + self.follower_s.username

