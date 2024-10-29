FROM node:18 as BUILD
WORKDIR /app


COPY package.json .

COPY yarn.lock .

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn run build

FROM node:18
COPY --from=BUILD /app/dist /app
RUN npm install serve -g
EXPOSE 8080
CMD [ "serve", "-s", "app", "-l", "8080" ]
