FROM node:latest

COPY /package*.json /app/

COPY /public/ /app/

COPY /views /app/

COPY /dotenv.env /app/

COPY /index.js /app/

RUN npm i

RUN npm i -g nodemon

RUN nodemon index.js

CMD [ "node", "index.js" ]