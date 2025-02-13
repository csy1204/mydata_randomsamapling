# Generated by Django 2.1.7 on 2019-10-11 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Elog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(max_length=500)),
                ('sid', models.CharField(max_length=500)),
                ('url', models.TextField()),
                ('referrer', models.TextField()),
                ('timestamp', models.IntegerField()),
                ('duration', models.FloatField()),
                ('uptime', models.FloatField()),
                ('platform', models.CharField(max_length=100)),
                ('title', models.TextField()),
                ('channel', models.CharField(max_length=500)),
                ('gender', models.IntegerField()),
                ('age', models.IntegerField()),
                ('useragent', models.TextField()),
                ('action', models.CharField(max_length=250)),
                ('label', models.CharField(max_length=250)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vlog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(max_length=500)),
                ('sid', models.CharField(max_length=500)),
                ('url', models.TextField()),
                ('referrer', models.TextField()),
                ('timestamp', models.IntegerField()),
                ('hour', models.IntegerField()),
                ('duration', models.FloatField()),
                ('uptime', models.FloatField()),
                ('platform', models.CharField(max_length=100)),
                ('title', models.TextField()),
                ('channel', models.CharField(max_length=500)),
                ('gender', models.IntegerField()),
                ('age', models.IntegerField()),
                ('useragent', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]
