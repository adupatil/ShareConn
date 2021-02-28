from django.db.models.signals import post_save, post_delete
from .models import Post, Like, Comment
from django.dispatch import receiver
from django.db.models import F
from django.shortcuts import get_object_or_404

@receiver(post_save,sender=Like)
def like_count(created,instance,sender,**kwargs):
    if created:
        post = Post.objects.get(id=instance.post_id.id)
        post.num_likes = F('num_likes')+1
        post.save()

@receiver(post_save,sender=Comment)
def comment_count(created,instance,sender,**kwargs):
    if created:
        post = Post.objects.get(id=instance.post_id.id)
        post.num_comments = F('num_comments')+1
        post.save()

@receiver(post_delete,sender=Like)
def like_removed(instance,sender,**kwargs):
        post = Post.objects.get(id=instance.post_id.id)
        post.num_likes = F('num_likes')-1
        post.save()

@receiver(post_delete,sender=Comment)
def comment_removed(instance,sender,**kwargs):
        post = Post.objects.get(id=instance.post_id.id)
        post.num_comments = F('num_comments')-1
        post.save()
