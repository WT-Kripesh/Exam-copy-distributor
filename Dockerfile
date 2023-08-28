# ---- Base Node ----
FROM node:14 AS base
WORKDIR /app

# ---- Build Client ----
FROM base AS client

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install --force

ENV REACT_APP_BASE_URL=/

ENV GENERATE_SOURCEMAP=false

COPY client/ ./

RUN npm run build

# ---- Build Server ----
FROM base AS server

WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server/ ./

ENV PORT=4000


# ---- Release ----
FROM node:14 AS release

WORKDIR /app

COPY --from=client /app/client/build /app/client

COPY --from=server /app/server /app/server

CMD ["node", "server/index.js"]