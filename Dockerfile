FROM gcr.io/platformer-public/mkdocs-material as build-stage

LABEL app platformer-docs
LABEL maintainers binura.g@platformer.com

 
COPY . /docs

RUN mkdocs build

FROM nginx:1.13.12-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /docs/site/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;" ]
