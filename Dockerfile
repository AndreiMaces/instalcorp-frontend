# Production stage
FROM node:18-alpine

WORKDIR /
COPY ./dist .
EXPOSE 5372
CMD ["node", "/instalcorp-frontend/server/server.mjs"]
