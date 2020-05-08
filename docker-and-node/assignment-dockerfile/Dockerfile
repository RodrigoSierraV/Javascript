# fill in the blanks to dockerize this node app
FROM node:10.20-alpine

EXPOSE 3000

RUN apk add --no-cache tini

WORKDIR /app

COPY package.json package.lock* ./

RUN npm install && npm cache clean --force

COPY . .

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "app.js"]
