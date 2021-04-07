from django.db.models.signals import post_save, post_delete
from .models import Subconn, SubconnFollower,SubconnLike,SubconnComment,SubconnPost
from django.dispatch import receiver
from django.db.models import F


@receiver(post_save, sender=SubconnFollower)
def add_subconn_follower(sender, instance, created, **kwargs):
    print(instance.followee_s)
    if created:
        followee = Subconn.objects.get(subconn_name=instance.followee_s)
        followee.num_subconn_followers = F('num_subconn_followers') + 1
        followee.save()

@receiver(post_delete,sender=SubconnFollower)
def remove_follower(sender, instance, **kwargs):
    followee = Subconn.objects.get(subconn_name=instance.followee_s)
    followee.num_subconn_followers = F('num_subconn_followers') - 1
    followee.save()

@receiver(post_save,sender=SubconnLike)
def subconn_like_count(created,instance,sender,**kwargs):
    if created:
        post = SubconnPost.objects.get(id=instance.post.id)
        post.num_likes = F('num_likes')+1
        post.save()
        

@receiver(post_save,sender=SubconnComment)
def subconn_comment_count(created,instance,sender,**kwargs):
    if created:
        post = SubconnPost.objects.get(id=instance.post.id)
        post.num_comments = F('num_comments')+1
        post.save()

@receiver(post_delete,sender=SubconnLike)
def subconn_like_removed(instance,sender,**kwargs):
        post = SubconnPost.objects.get(id=instance.post.id)
        post.num_likes = F('num_likes')-1
        post.save()

@receiver(post_delete,sender=SubconnComment)
def subconn_comment_removed(instance,sender,**kwargs):
        post = SubconnPost.objects.get(id=instance.post.id)
        post.num_comments = F('num_comments')-1
        post.save()