from django.core.management.base import BaseCommand, CommandError
from post.models import Vlog
from itertools import islice
import time

class Command(BaseCommand):
    help = 'Insert CSV Data into Vlog DB'

    def add_arguments(self, parser):
        parser.add_argument('path', nargs='+', type=str)

    def handle(self, *args, **options):
        path = options['path']
        print('ss', path)
        st_time = time.time()
        with open(path[0], 'r') as f:
            datalines = f.readlines()
        data_gen = (line.split(',') for line in datalines)
        #Batch Size 설정, Sqlite3는 1000에서 오류발생, 추후 PostgreSQL에서 성능향상 기대 가능
        batch_size = 10
        # Vlog.objects.all().delete()
        data2 = {
            "age": "23",
            "channel": "우왁굳의게임방송",
            "url": "https://www.youtube.com/watch?v=F1Kac-3EVxA",
            "title": "시민으로 변장한 사람을 잡아라! - GTA5 히든팬치",
            "uid": "young",
            "hour": 10,
            "duration": 5618.761,
            "gender": "1",
            "platform": "Youtube",
            "referrer": "https://www.youtube.com/watch?v=ibpbUtMzWEI",
            "sid": "dasds",
            "timestamp": 1570770999721,
            "uptime": 73.049977,
            "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
        }
        data3 = {
            "age": "23",
            "channel": "우왁굳의게임방송",
            "url": "https://www.youtube.com/watch?v=F1Kac-3EVxA",
            "title": "시민으로 변장한 사람을 잡아라! - GTA5 히든팬치",
            "uid": "young",
            "hour": 11,
            "duration": 5618.761,
            "gender": "1",
            "platform": "Youtube",
            "referrer": "https://www.youtube.com/watch?v=ibpbUtMzWEI",
            "sid": "dasds",
            "timestamp": 1570770999721,
            "uptime": 73.049977,
            "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
        }

        Vlog.objects.create(data2)
        # objs = (Vlog(data2) for data in data_gen)
        # objs = (Vlog(data2),Vlog(data2))
        # st_time = time.time()
        # while True:
        #     batch = list(islice(objs, batch_size))
        #     if not batch:
        #         break
        #     Vlog.objects.bulk_create(batch, batch_size)
        # print('Insertion Time: {}'.format(time.time()-st_time))
        # # Single Transaction 대비 10배이상의 성능 향상
        self.stdout.write("Data Insertion Completed", ending='')