from django.db import models
from django.contrib.auth.models import User, AbstractUser
from django.db.models import F
from PIL import Image




class User(AbstractUser):
  dob = models.DateField(null=True, blank=True)
  created_at = models.DateTimeField(auto_now_add=True)

class UserProfile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  num_following = models.PositiveIntegerField(default= 0)
  num_followers = models.PositiveIntegerField(default= 0)
  profile_pic = models.ImageField(default='default.jpg',upload_to='profile_pics')
  cover_pic = models.ImageField(default='default.jpg',upload_to='cover_pics')
  #num_subconns = models.PositiveIntegerField(default=0)
  
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
            img2.save(self.profile_pic.path)

    def __str__(self):
       return self.user.username
		 

    

class UserFollow(models.Model):
  follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='follower')
  followee = models.ForeignKey(User, on_delete=models.CASCADE, related_name='followee')
  

  class Meta:
        constraints = [
            models.UniqueConstraint(fields=['follower', 'followee'], name='u_follow_unique')
        ]

  def __str__(self):
    return self.followee.username + " - Followed By -> " + self.follower.username

    # def add_following_count(self):
    #   follower= UserProfile.objects.get(user=self.follower)
    #   follower.num_following = F('num_following') + 1
    #   follower.save()
      
    # def add_followers_count(self):
    #   followee = UserProfile.objects.get(user=self.followee)
    #   followee.num_followers = F('num_followers') + 1
    #   followee.save()
