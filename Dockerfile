FROM node:10-alpine

COPY package.json .
COPY src ./src
COPY tsconfig.client.json .
COPY tsconfig.server.json .
COPY webpack.config.js .
COPY public ./public

ENV DB=mongodb://mongodb-stitch-escuelita-blog-afnyw:pUL!31A124n&@escuelita-blog-shard-00-00-bclir.mongodb.net:27017,escuelita-blog-shard-00-01-bclir.mongodb.net:27017,escuelita-blog-shard-00-02-bclir.mongodb.net:27017/posts-escuelita?ssl=true&replicaSet=escuelita-blog-shard-0&authSource=admin&retryWrites=true

RUN npm install --silent

CMD [ "npm", "start" ]

