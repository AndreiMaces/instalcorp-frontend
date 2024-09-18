# Production stage
FROM node:18-alpine

WORKDIR /

# Copy the built app from the build stage
COPY . .

# Expose any necessary port (e.g., 3000)
EXPOSE 5372

# Run the application
CMD ["node", "/usr/src/app/instalcorp-frontend/server/server.mjs"]
