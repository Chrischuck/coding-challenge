FROM node:8.10.0-alpine

ADD . /code
WORKDIR /code

RUN npm install
RUN npm run build

CMD ["server.js"]