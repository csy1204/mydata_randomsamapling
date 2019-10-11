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

from .models import Vlog

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
    /api/view/pattern?age=20 | uid=young
    Keyword arguments:
    age - int, 나이 (ex) 20, 30)
    uid - str, 유저 id
    Return: 시간대별 패턴 리스트
    """
    if request.GET.get('age'):
        age = int(request.GET.get('age', 20))
        with connection.cursor() as cursor:
            cursor.execute("SELECT hour, avg(c) FROM (select uid, hour, count(*) as c from post_vlog where age between %s and %s group by hour) group by hour", [age, age+9])
            rows = cursor.fetchall() 
    elif request.GET.get('uid'):
        uid = request.GET.get('uid', 'young')
        with connection.cursor() as cursor:
            cursor.execute('select hour, count(uid) as c from post_vlog where uid = %s group by hour', [uid])
            rows = cursor.fetchall()  
    data = [row for row in rows]
    return JsonResponse(data, safe=False)