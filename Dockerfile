FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5173

RUN yarn global add serve

CMD ["serve", "-s", "dist", "-l", "5173"]
