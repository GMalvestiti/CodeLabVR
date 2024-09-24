FROM node:20.11.1-alpine3.19

RUN ls -la

# Similar ao sudo apt get
RUN apk add --no-cache bash

ENV NODE_ENV=development

WORKDIR /home/node/app

COPY . .