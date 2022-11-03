FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm run build

EXPOSE 3000

# el cmd se corre solo cuando se hace el docker run es la diferencia con la sentencia RUN que se corre en el build

CMD [ "npm", "run", "start" ]

