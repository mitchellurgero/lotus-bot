FROM node:18

WORKDIR /opt/lotusbot
COPY docker-start.sh /opt/docker-start.sh
RUN chmod +x /opt/docker-start.sh
CMD /opt/docker-start.sh