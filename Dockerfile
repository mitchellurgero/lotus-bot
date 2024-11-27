FROM node:18

WORKDIR .
COPY docker-start.sh
CMD docker-start.sh