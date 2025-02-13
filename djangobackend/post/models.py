from django.db import models

# Create your models here.
class Vlog(models.Model):
    uid = models.CharField(max_length=500)
    sid = models.CharField(max_length=500)
    url = models.TextField()
    referrer = models.TextField()
    timestamp = models.IntegerField()
    hour = models.IntegerField()
    duration = models.FloatField()
    uptime = models.FloatField()
    platform = models.CharField(max_length=100)
    title = models.TextField()
    channel = models.CharField(max_length=500)
    gender = models.IntegerField()
    age= models.IntegerField()
    useragent = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Elog(models.Model):
    uid = models.CharField(max_length=500) 
    sid = models.CharField(max_length=500)
    url = models.TextField()
    referrer = models.TextField()
    timestamp = models.IntegerField()
    duration = models.FloatField()
    uptime = models.FloatField()
    platform = models.CharField(max_length=100)
    title = models.TextField()
    channel = models.CharField(max_length=500)
    gender = models.IntegerField()
    age= models.IntegerField()
    useragent = models.TextField()
    action = models.CharField(max_length=250)
    label = models.CharField(max_length=250)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Subscription(models.Model):
    uid = models.CharField(max_length=500)
    platform = models.CharField(max_length=100)
    expire_at = models.TextField()


