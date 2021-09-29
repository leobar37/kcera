FROM node:16-alpine3.11 as builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:latest

WORKDIR /app

COPY --from=builder /app/dist/ /usr/share/nginx/html/

