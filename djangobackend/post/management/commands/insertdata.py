from django.core.management.base import BaseCommand, CommandError
from post.models import Subscription
from itertools import islice
import time

class Command(BaseCommand):
    help = 'Insert CSV Data into Vlog DB'

    def handle(self, *args, **options):

        Subscription.objects.all().delete()
        print(Subscription.objects.all())
        self.stdout.write("Data Insertion Completed", ending='')