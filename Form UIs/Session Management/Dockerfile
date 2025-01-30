FROM node:latest

WORKDIR /app/

COPY /package*.json /app/
COPY /src /app/

RUN npm cache clean --force
RUN rm -rf node_modules package-lock.json

RUN npm i
RUN npm i -g nodemon

EXPOSE 3000

CMD [ "nodemon", "index.js" ]