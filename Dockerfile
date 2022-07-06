FROM node:16.15.1

RUN mkdir /usr/src/app

WORKDIR /usr/app


COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["node", "src/api/app.js"]
