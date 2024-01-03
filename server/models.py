from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE)
    note_number = models.IntegerField(null=True, blank=True)
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"User: {self.user.username}, Note #{self.note_number}, Body: {self.body[0:50]}"
