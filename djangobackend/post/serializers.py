from rest_framework import serializers
from . import models

class VlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Vlog
        fields = '__all__'