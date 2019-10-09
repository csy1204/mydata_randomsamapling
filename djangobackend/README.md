# django-backend

## Git Clone & Move Dir
 먼저 프로젝트를 clone하고 해당 프로젝트 폴더로 이동합니다.
```
git clone https://github.com/csy1204/djangobackend.git
cd django-backend
```

## Install
 필요한 패키지를 설치해줍니다.
```
(optional) pip install django
pip install djangorestframework
pip install django-cors-headers
```

## Run
  DB 마이그레이션을 한 후 서버를 켭니다.
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## API명세
|URL|METHOD|Description|Params|Return|
|---|---|---|---|---|
|/api/posts|`GET`|전체 글을 조회합니다.||[...{Post}]|
|/api/posts|`POST`|새로운 글을 작성합니다.|{title:'',content:''}|{Post}|
|/api/posts/[id]|`GET`|특정 id의 글을 조회합니다.||{Post}|
|/api/posts/[id]|`DELETE`|특정 id의 글을 삭제합니다.|||

