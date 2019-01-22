FROM node:alpine as builder

WORKDIR /build

COPY source .

RUN yarn
RUN yarn build:demo

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
COPY --from=builder /build/dist/demo .
