FROM node:16-alpine3.14 as base

ADD . /app
WORKDIR /app

RUN npm install
RUN npm install nestjs -g 

CMD ["npm", "run", "start:dev"]