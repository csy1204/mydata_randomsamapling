from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from . import models
from . import serializers


class VlogViewset(viewsets.ModelViewSet):
    queryset = models.Vlog.objects.all()
    serializer_class = serializers.VlogSerializer
