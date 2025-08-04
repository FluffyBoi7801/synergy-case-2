FROM node:20-alpine as app
WORKDIR /web
COPY ./web ./
RUN ls -la
RUN npm install --save-dev
RUN npm run build

FROM nginx:stable-alpine as prod
COPY --from=app ./web/dist /usr/share/nginx/html
COPY /devops/configs/web/nginx.conf /etc/nginx/default.conf