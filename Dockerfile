FROM node:16-slim

WORKDIR /nestjs-task-manager/

COPY package.json package-lock.json /nestjs-task-manager/

COPY . .

RUN npm i --silent

USER node

EXPOSE 3000
