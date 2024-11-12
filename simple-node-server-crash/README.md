## Builden van de Docker image
`docker build -t node-express-server .`

## Runnen van de gebuilde image
`docker run -d -p 3000:3000 node-express-server --name node-express-server`

## Tonen van de containers die draaien
`docker ps`

## Shell openen in de draaiende container
`docker exec -it <image_id> /bin/bash`

**Kan tonen dat er een andere versie van node in de container gebruikt wordt dan op de host**

## Pushen naar registry
Eerst taggen met de registry tag
`docker tag node-express-server:latest my-private-registry.onrender.com/node-express-server:latest` 

Dan pushen
`docker push my-private-registry.onrender.com/node-express-server:latest`