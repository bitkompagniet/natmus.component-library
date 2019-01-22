#!/bin/bash

IMAGE="vue-ncl-demo"

docker rm -f $IMAGE
docker build -t $IMAGE .
docker run -it --name $IMAGE -p 8080:80 $IMAGE