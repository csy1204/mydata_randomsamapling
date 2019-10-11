from django.shortcuts import render

from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Count, Avg, Max, Min
import os
import glob
from django.db.models import Q
from django.db import connection


# Create your views here.
from rest_framework import viewsets
from . import models
from . import serializers

from .models import Vlog, Subscription

class VlogViewset(viewsets.ModelViewSet):
    queryset = models.Vlog.objects.all()
    serializer_class = serializers.VlogSerializer

@csrf_exempt
def get_hot_videos(request):
    with connection.cursor() as cursor:
        cursor.execute('SELECT gender, age, platform, channel, title, url, count(title) FROM post_vlog group by gender, age, platform, channel, title, url order by 4 desc')
        rows = cursor.fetchall()  
    dataset_paths = [row for row in rows]
    print(dataset_paths)
    return JsonResponse(dataset_paths, safe=False)


@csrf_exempt
def get_view_pattern(request):
    """sumary_line
    
    Keyword arguments:
    age - int, 나이 (ex) 20, 30)
    uid - str, 유저 id
    Return: 시간대별 패턴 리스트
    """
    sum2 = 1
    if request.GET.get('age'):
        age = int(request.GET.get('age', 20))
        with connection.cursor() as cursor:
            cursor.execute('SELECT hour, sum(c) FROM (select uid, hour, count(*) as c from post_vlog where age between %s and %s group by hour) group by hour', [age, age+9])
            rows = cursor.fetchall() 
            cursor.execute('select count(distinct(uid)) as c from post_vlog where age between %s and %s', [age, age+9])
            sum2 = cursor.fetchall()[0][0]
    elif request.GET.get('uid'):
        uid = request.GET.get('uid', 'young')
        with connection.cursor() as cursor:
            cursor.execute('select hour, count(*) as c from post_vlog where uid = %s group by hour', [uid])
            rows = cursor.fetchall()  
    data = [row[1]/sum2 for row in rows]
    return JsonResponse(data, safe=False)


@csrf_exempt
def get_subscription(request):
    """sumary_line
    
    Keyword arguments:
    uid - str, 유저 id
    Return: 
    """
    sum2 = 1

    if request.GET.get('uid'):
        uid = request.GET.get('uid', 'young')
        with connection.cursor() as cursor:
            cursor.execute('select uid, platform, expire_at as c from post_subscription where uid = %s', [uid])
            rows = cursor.fetchall()  
    data = [row for row in rows][0]
    return JsonResponse(data, safe=False)

@csrf_exempt
def post_subscription(request):
    """sumary_line
    
    Keyword arguments:
    uid - str, 유저 id
    Return: 
    """
    sum2 = 1
    print(request.GET)
    _uid = request.GET.get('uid','shuka')
    _platform = request.GET.get('platform', 'watcha')
    _expire_at = request.GET.get('expire')
    print(_uid, _platform, _expire_at)
    Subscription.objects.create(uid=_uid, platform=_platform, expire_at=_expire_at)
    print(Subscription.objects.all())    
    return JsonResponse([1], safe=False)
