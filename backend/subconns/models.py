from django.db import models
from users.models import User
from PIL import Image
# from posts.models import Post

def User_Directory(instance,image):
  return "subconn_profile_pics/{}/{}".format(instance.user.username, image)

def User_Directory_C(instance,image):
  return "subconn_cover_pics/{}/{}".format(instance.user.username, image)


class Subconn(models.Model):
    subconn_admin = models.ForeignKey(User,on_delete=models.CASCADE,related_name='subconn_admin')
    subconn_name = models.CharField(max_length=100,unique=True)
    num_subconn_followers = models.PositiveBigIntegerField(default=0)
    profile_pic = models.ImageField(default='default.jpg',upload_to=User_Directory)
    cover_pic = models.ImageField(default='default.jpg',upload_to=User_Directory_C)

    def save(self, *args, **kwargs):
        super().save(*args,**kwargs)
        img1 = Image.open(self.profile_pic.path)
        img2 = Image.open(self.cover_pic.path)
        if img1.height > 300 or img1.width > 300:
                output_size = (300, 300)
                img1.thumbnail(output_size)
                img1.save(self.profile_pic.path)

        if img2.height > 312 or img2.width > 820:
                output_size = (312, 820)
                img2.thumbnail(output_size)
                img2.save(self.cover_pic.path)


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

