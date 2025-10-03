# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose port (default for T3 apps)
EXPOSE 5173

# Start the app in production
CMD ["npm", "start"]