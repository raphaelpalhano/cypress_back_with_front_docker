FROM node:16.15.1

WORKDIR /usr/app

COPY package*.json /usr/app

RUN yarn install

COPY .env /usr/app/
COPY ./web/ /usr/app

EXPOSE 4000

CMD ["node", "src/api/app.js"]
