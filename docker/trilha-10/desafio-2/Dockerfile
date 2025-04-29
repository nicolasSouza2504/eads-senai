
FROM node:14

RUN npm install -g @vue/cli

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app

RUN apt-get update && apt-get install -y mysql-client

RUN apt-get install -y nginx

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD service nginx start && npm run serve
