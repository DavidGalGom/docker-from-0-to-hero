FROM node:18.12.1-alpine AS node-base

LABEL maintainer="david.galvez@softonic.com"
LABEL application="docker-training-1"

ENV LOCAL_PORT_API="4040"
EXPOSE $LOCAL_PORT_API
ENV LOCAL_PORT_APP="5000"
EXPOSE $LOCAL_PORT_APP

COPY package.json .
RUN /bin/sh -c yarn install

FROM nginx:alpine AS app

COPY ./front /usr/share/nginx/html

FROM node-base AS api

COPY index.js .

CMD [ "node", "index.js" ]



