FROM centos:7

ENV NODEJS_VERSION=10

EXPOSE 3000

WORKDIR /usr/src/app

COPY package.json package-lock.json* ./ 

RUN npm install && npm cache clean --force

RUN yum add --update curl

COPY . .

CMD [ "node", "./bin/www" ]
