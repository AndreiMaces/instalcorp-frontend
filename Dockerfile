# Build stage
FROM node:18-alpine AS build

WORKDIR /usr/src/app

# Copy and install only the dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the source files
COPY . .

# Build the project
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy the built app from the build stage
COPY --from=build /usr/src/app/dist ./dist

# Expose any necessary port (e.g., 3000)
EXPOSE 5372

# Run the application
CMD ["node", "/usr/src/app/dist/instalcorp-frontend/server/server.mjs"]
