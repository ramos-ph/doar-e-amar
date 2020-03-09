# setting production environment
FROM node:latest
ENV NODE_ENV=production

WORKDIR /usr/src/app

# install dependencies
COPY package.json ./
RUN yarn install --production=true

# bundles app source
COPY . .

# starting the server
EXPOSE 49833
CMD [ "yarn", "start" ]
