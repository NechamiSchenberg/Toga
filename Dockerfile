FROM node:14-alpine

COPY package.json /app/

COPY index.js /app/

WORKDIR /app

RUN npm install

CMD ["node","index.js"]
