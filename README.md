# valid

## Build

docker build -t valid .

## Run

docker run -d -p 8080:8080 valid

## Get container ID

docker ps | grep valid | cut -d" " -f1

## Follow logs

docker logs -f [container id]

## Log on to container if needed

docker exec -it [container id] bash

## Destroy container prior to rebuild and re-run

docker kill [container id]
