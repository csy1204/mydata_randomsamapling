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