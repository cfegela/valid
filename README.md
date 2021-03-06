# valid

### Requirements
* minikube (brew install minikube)
* docker (https://docs.docker.com/docker-for-mac/install/)

### Build

docker build -t cfegela/valid .

### Run

docker run -d -p 8080:8080 cfegela/valid

### Push

docker login
docker push cfegela/valid:latest

### Get container ID

docker ps | grep valid | cut -d" " -f1

### Follow logs

docker logs -f [container id]

### Log on to container if needed

docker exec -it [container id] bash

### Destroy container prior to rebuild and re-run

docker kill [container id]

### Curl Test

`curl http://localhost:8080/`
`curl --data-binary @data.txt -X POST -H "Content-Type: text/plain" http://localhost:8080/`
