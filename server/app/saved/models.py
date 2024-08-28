from django.db import models
from users.models import Users
from django.core.validators import MinLengthValidator

# Create your models here.
class PlaylistUser(models.Model):
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, validators=[MinLengthValidator(5)])
    
    
class PlaylistSongs(models.Model):
    playlist = models.ForeignKey(PlaylistUser, on_delete=models.CASCADE)
    song_id = models.PositiveIntegerField()
    order  = models.PositiveSmallIntegerField()