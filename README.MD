# Instalação Docker
link https://docs.docker.com/install/

# Executar na API
docker-compose up --build


HTTP verb | URI | Action
----------| --- | ------
GET | /user | list all users
GET | /user/ID | get user with ID
POST | /user | create a new user
PUT | /user/ID | modify user with ID
DELETE | /user/ID | delete user with ID


# Exemplo

- CREATE USER
```
curl -X POST \
  http://localhost:8000/users \
  -H 'Content-Type: application/json' \
  -d '{
	"name": "Jefferson",
	"email": "embura@gmail.com",
	"department": "TI"
}'
```

- GET USER
```
curl -X GET \
  http://localhost:8000/users/

curl -X GET \
  http://localhost:8000/users/1
```

- UPDATE USER
```
curl -X PUT \
  http://localhost:8000/users/1 \
  -H 'Content-Type: application/json' \
  -d '{
	"department": "DBA"
}'
```

- DELETE USER
```
curl -X DELETE http://localhost:8000/users/1
```

#  elasticsearch

```
curl -X GET \
  'http://localhost:9200/magazine/_search?q=name:magazine'
```
  