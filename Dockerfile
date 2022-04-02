FROM node:alpine@sha256:1ee1478ef46a53fc0584729999a0570cf2fb174fbfe0370edbf09680b2378b56

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# ENV CI=true
# RUN npm run test

CMD [ "npm", "run","start" ]