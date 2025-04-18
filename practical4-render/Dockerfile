# Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

# Install serve to run the application
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy build files from the build stage
COPY --from=build /app/build ./build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]