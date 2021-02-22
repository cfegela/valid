#!/bin/bash

# build
docker build -t valid .

# minikube
minikube start

# publish
echo "Put the github push back here"

# deploy
kubectl create deployment valid --image=cfegela/valid
kubectl expose deployment valid --type=NodePort --port=8080
podname=$(kubectl get pods | grep valid | cut -d" " -f1)
kubectl port-forward ${podname} 8080:8080 &

# test
curl --data-binary @data.txt -X POST -H "Content-Type: text/plain" http://localhost:8080/

# cleanup
kubectl delete services valid
kubectl delete deployment valid

