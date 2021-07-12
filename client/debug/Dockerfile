FROM node:14.17.0
LABEL maintainer="Reiss Jarvis"

ENV APPDIR /usr/src/app
ENV PATH ${APPDIR}/node_modules/.bin:${PATH}

RUN mkdir -p ${APPDIR}
WORKDIR ${APPDIR}

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts -g

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
