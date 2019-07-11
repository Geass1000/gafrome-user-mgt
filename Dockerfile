FROM node:alpine

USER node

WORKDIR /app

COPY . /app

# docker build --tag=gafrome-user-mgt:latest .