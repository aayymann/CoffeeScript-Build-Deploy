FROM node:16-alpine3.18

WORKDIR /app

COPY package*.json ./

RUN npm install --production && \
    addgroup -S appgroup && adduser -S appuser -G appgroup 

WORKDIR /app/src

COPY dist/* .

EXPOSE 8080

USER appuser

CMD ["npm","start"]