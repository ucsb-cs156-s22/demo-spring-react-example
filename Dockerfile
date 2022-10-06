FROM node:16-alpine
WORKDIR /frontend
COPY frontend /frontend
RUN npm ci
RUN npm run build

FROM maven:3.8.6-amazoncorretto-17
WORKDIR /app
COPY . /app
ENV PRODUCTION true
ENV SERVER_PORT 80
RUN mvn compile
COPY --from=0 /frontend/build /app/target/classes/public
CMD ["mvn", "spring-boot:run"]
