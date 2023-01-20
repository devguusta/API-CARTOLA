FROM node:18.10.0-alpine3.16 AS development

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN yarn add @nestjs/cli
RUN yarn add glob rimraf

RUN yarn install --production=true

COPY . .
RUN yarn
RUN yarn build

#RUN yarn typeorm migration:run
RUN yarn start:dev

CMD ["node", "dist/main"]