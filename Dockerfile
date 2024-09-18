# Production stage
FROM node:18-alpine

WORKDIR /
COPY . .
EXPOSE 5372
CMD ["ls"]
CMD ["node", "/instalcorp-frontend/server/server.mjs"]
