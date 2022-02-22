FROM node:16.14.0-stretch

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:16.14.0-stretch

WORKDIR /app
