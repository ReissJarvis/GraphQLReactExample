#########
# Build #
#########
FROM node:14.17.0-slim as builder

LABEL maintainer="Reiss Jarvis"

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

EXPOSE 8080

RUN npm start
