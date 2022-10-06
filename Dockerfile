FROM maven:3.8.6-amazoncorretto-17

WORKDIR /app
COPY . /app

# RUN apt-get install -y curl \
#   && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
#   && curl https://cli-assets.heroku.com/install-ubuntu.sh | bash - \
#   && apt-get install -y nodejs

ENV SERVER_PORT 80
ENV PRODUCTION true

CMD ["mvn", "spring-boot:run"]
