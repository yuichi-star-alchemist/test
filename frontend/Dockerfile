FROM node:22.11.0-slim

WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm ci --omit=dev

COPY --chown=node:node . .

ENV HOSTNAME="57.180.44.232"
CMD ["node_modules/next/dist/bin/next", "start"]