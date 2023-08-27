FROM node:18

RUN mkdir -p /app/server

WORKDIR /app/server

COPY package*.json ./

RUN npm install --force

COPY . .

ENV PORT=4000

EXPOSE 400

CMD ["npm", "start"]