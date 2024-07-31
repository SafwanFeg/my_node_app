# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . /app

# Make port 8080 available to the world outside this container
# EXPOSE 8080

# Run the application
CMD ["npm", "start"]
