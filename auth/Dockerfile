FROM node:lts-alpine

ARG node_env=production

ENV NODE_ENV $node_env

WORKDIR /app

ADD package.json .
RUN yarn install

ADD . .