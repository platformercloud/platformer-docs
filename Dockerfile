FROM node:10-alpine as build-stage

LABEL app platformer-docs
LABEL maintainers binura.g@platformer.com

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

FROM nginx:1.13.12-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/build/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;" ]
