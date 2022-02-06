FROM node:17 as build

WORKDIR /app

COPY package.json ./
RUN yarn install 

COPY . .

RUN yarn build

FROM node:17

COPY --from=build /app/bin/ ./bin/
COPY --from=build /app/package.json .

RUN yarn install --production=true

ENTRYPOINT [ "node", "bin/app.js" ]