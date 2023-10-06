FROM node:latest as node
WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build


FROM nginxinc/nginx-unprivileged as nginx
COPY --from=node /app/dist/openshift /usr/share/nginx/html

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]