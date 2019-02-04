#!/bin/bash

#export MSYS_NO_PATHCONV=1 # to make sure volumes are not misinterpreted in Windows Git Bash and docker

ROOTDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
SRC="${ROOTDIR}/source"

PM="npm"

HASYARN=$(command -v yarn)

if [ ! -z "$HASYARN" ]; then
    PM="yarn"
fi

command="${1: }"
arguments="${@:2}"

help() {
    echo -e "
    natmus component library utilities

    Usage: nm <command>

    Commands:
      build           Build the site from source
      push            Build and push the docker image
      serve           Serve the jekyll site

      build-demo      Build the demo site

      clean           Clean out all deps
    "
}

build() {
    docker run --rm --volume=$VOLUME -it jekyll/jekyll:$JEKYLL_VERSION jekyll build
    docker build -t $DOCKER_IMAGE_NAME .
}

push() {
    build
    docker push docker.bitkompagniet.dk/bitkompagniet/bitkompagniet.dk
}

case ${command} in
    -h)
        help
        ;;
    --help)
        help
        ;;
    help)
        help
        ;;
    "")
        help
        ;;
    serve)
        cd $SRC
        npm install
        npm run serve
        ;;
    push)
        push
        ;;
    serve)
        cd $SRC
        $PM run start
        ;;
    build-demo)
        cd $SRC
        $PM install
        $PM run build:demo
        ;;
    clean)
        cd $SRC
        rm -rf node_modules
        ;;
    *)
        echo ""
        echo "Error. Unknown command."
        help
        ;;
esac



