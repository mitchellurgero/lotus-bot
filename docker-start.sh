#!/bin/bash
## Starter for the docker container, install dependencies, typescript, etc

## Install Node Dependencies
npm install

## If first time being ran, we need to generate and push the schema for the DB:
DB_STRING="postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=${DB_SCHEMA}"
npx prisma generate
npx prisma db push

## Compile TypeScript so that the service can run
/opt/lotusbot/node_modules/typescript/bin/tsc

## Start the service:
node index.js