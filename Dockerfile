FROM node:16.15.1

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

#Executar apenas para OS Ubuntu/Debian
RUN apt-get update && apt-get install --yes libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["node", "src/api/app.js"]
