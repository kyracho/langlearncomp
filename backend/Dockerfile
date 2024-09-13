# Use an official OpenJDK image as the base image
FROM openjdk:21-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged jar file into the container
COPY build/libs/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the Spring Boot app runs on (default is 8080)
EXPOSE 8080

# Run the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
