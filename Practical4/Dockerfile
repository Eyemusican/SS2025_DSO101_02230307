# Use Node.js Alpine image as base (Alpine is a lightweight Linux distribution)
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies defined in package.json
RUN npm install

# Copy all remaining files from current directory to container's working directory
COPY . .

# Tell Docker that the container will listen on port 3000
EXPOSE 3000

# Define the command to run when the container starts
CMD ["npm", "start"]