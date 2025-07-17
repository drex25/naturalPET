# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy static assets (images) to ensure they're available
COPY --from=build /app/public/assets /usr/share/nginx/html/assets

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create directories in nginx and ensure permissions
RUN mkdir -p /usr/share/nginx/html/assets /usr/share/nginx/html/data && \
    chmod -R 755 /usr/share/nginx/html/assets /usr/share/nginx/html/data

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"] 