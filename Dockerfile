FROM docker.io/library/node:16.14.0 AS build
ARG VITE_MONITOR_API
ENV VITE_MONITOR_API $VITE_MONITOR_API

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:16.14.0
COPY --from=build /app/package.json /app/build ./
EXPOSE 3000
CMD ["node", "index.js"]
