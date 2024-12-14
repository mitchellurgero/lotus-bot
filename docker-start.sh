#!/bin/bash
## Starter for the docker container, install dependencies, typescript, etc

## If first time being ran, we need to generate and push the schema for the DB:
if [ ! -e "/opt/lotusbot/firstrun" ]; then
    npm install

    DB_STRING="postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=${DB_SCHEMA}"
    
    npx prisma generate
    npx prisma db push

    touch /opt/lotusbot/firstrun
fi 

## Compile TypeScript so that the service can run
npx tsc

## Start the service:
node index.js