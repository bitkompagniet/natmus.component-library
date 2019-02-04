FROM node:alpine as builder

WORKDIR /build

COPY . .

ENV VUE_APP_URL http://localhost:8080

RUN yarn
RUN yarn build:demo

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /build/dist/demo .
