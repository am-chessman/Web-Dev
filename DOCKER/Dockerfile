FROM node:latest 

COPY package.json /app/
COPY /src /app/

WORKDIR /app

RUN npm i 

CMD ["node", "index.js"]