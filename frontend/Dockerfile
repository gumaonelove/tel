FROM node:18-alpine as dependencies
WORKDIR /client
COPY package.json package-lock.json  ./
RUN npm i

FROM node:18-alpine as runner
WORKDIR /client
COPY . .
COPY --from=dependencies /client/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "start"]
