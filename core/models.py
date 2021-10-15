from django.db import models
from django.contrib.auth.models import User


class ActivityLog(models.Model):
    type = models.CharField(max_length=64)
    logged_user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
    fromuser = models.ForeignKey(User, null=True, blank=True, related_name="activitylogs_withfromuser",
                                 on_delete=models.SET_NULL)
    jsondata = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField('criado em', auto_now_add=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return '%s / %s / %s' % (
            self.type,
            self.logged_user,
            self.created_at,
        )


class Todo(models.Model):
    description = models.CharField(max_length=512)
    done = models.BooleanField(default=False)

    def to_dict_json(self):
        return {
            'id': self.id,
            'description': self.description,
            'done': self.done,
        }


class Tweet(models.Model):
    author_name = models.CharField(max_length=64)
    author_username = models.CharField(max_length=64)
    author_avatar = models.TextField()
    created_at = models.CharField(max_length=64)
    text = models.TextField()

    def to_dict(self):
        return {
            'id': self.id,
            'author_name': self.author_name,
            'author_username': self.author_username,
            'author_avatar': self.author_avatar,
            'created_at': self.created_at,
            'text': self.text
        }
