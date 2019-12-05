FROM node:12

WORKDIR /usr/src/app

RUN mkdir /usr/src/app/temp

COPY package*.json ./

RUN npm install
RUN npm install nodemon -g

COPY . .

EXPOSE 10000
CMD ["npm", "start"]

