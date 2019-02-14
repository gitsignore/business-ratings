FROM node:10-alpine

RUN apk update && apk upgrade

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/

COPY package.json ./
RUN npm install && npm cache clean --force

COPY . .

CMD [ "npm", "start" ]