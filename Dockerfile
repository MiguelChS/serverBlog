FROM node:10-alpine

COPY package.json .
COPY src ./src
COPY tsconfig.client.json .
COPY tsconfig.server.json .
COPY webpack.config.js .
COPY public ./public

ENV DB=mongodb://app_user:stq84vc3osfsksmfb7ggd6d0mn@ds129651.mlab.com:29651/heroku_t88zg6lj
RUN npm install --silent
RUN npm run build
# Heroku no supports EXPOSE
#EXPOSE 5000

CMD [ "npm", "start" ]

