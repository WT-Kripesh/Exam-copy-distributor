FROM node:18

RUN mkdir -p /app/client

WORKDIR /app/client

COPY package*.json ./

RUN npm install --force

ENV REACT_APP_BASE_URL=/

ENV GENERATE_SOURCEMAP=false

EXPOSE 3000

COPY . .


CMD ["npm", "start"]

