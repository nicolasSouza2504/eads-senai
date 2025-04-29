
FROM php:8.0-fpm

RUN apt-get update && apt-get install -y mysql-client

RUN apt-get install -y nginx

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY nginx.conf /etc/nginx/nginx.conf

COPY .. /var/www/html

EXPOSE 80

CMD service nginx start && php-fpm
