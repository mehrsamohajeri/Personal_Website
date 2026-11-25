docker pull ghcr.io/mehrsamohajeri/mehrsamohajeri.ir:latest

if docker ps -a | grep -q mehrsamohajeri.ir; then
    docker stop mehrsamohajeri.ir && docker rm mehrsamohajeri.ir
fi

docker run -d \
    --name mehrsamohajeri.ir \
    --add-host host.docker.internal:host-gateway \
    --network hidevs \
    ghcr.io/mehrsamohajeri/mehrsamohajeri.ir:latest

docker images 'ghcr.io/mehrsamohajeri/mehrsamohajeri.ir' --format '{{.ID}}' | tail -n +2 | xargs -r docker rmi
