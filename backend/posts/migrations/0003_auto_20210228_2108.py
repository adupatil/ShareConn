# Generated by Django 3.1 on 2021-02-28 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0002_post_post_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='post_type',
            field=models.FileField(blank=True, upload_to='posts/F(user.username)', verbose_name='path'),
        ),
    ]
