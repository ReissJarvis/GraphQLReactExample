FROM node:14
LABEL maintainer="Reiss Jarvis"

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
