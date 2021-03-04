from django.db.models.signals import post_save, post_delete
from .models import User, UserProfile, UserFollow
from django.dispatch import receiver
from django.db.models import F


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)


@receiver(post_save,sender=UserFollow)
def add_follower(sender, instance, created, **kwargs):
    if created:
        followee = UserProfile.objects.get(user=instance.followee)
        followee.num_followers = F('num_followers') + 1
        followee.save()

@receiver(post_save,sender=UserFollow)
def add_following(sender, instance, created, **kwargs):
    if created:
        follower = UserProfile.objects.get(user=instance.follower)
        follower.num_following = F('num_following') + 1
        follower.save()

@receiver(post_delete,sender=UserFollow)
def remove_follower(sender, instance, **kwargs):
    followee = UserProfile.objects.get(user=instance.followee)
    followee.num_followers = F('num_followers') - 1
    followee.save()

@receiver(post_delete,sender=UserFollow)
def remove_following(sender, instance, **kwargs):
    follower = UserProfile.objects.get(user=instance.follower)
    follower.num_following = F('num_following') - 1
    follower.save()