FROM alpine:3.4

RUN apk update && apk add nodejs && mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

ENTRYPOINT ["npm"]
