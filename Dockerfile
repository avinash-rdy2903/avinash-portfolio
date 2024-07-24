FROM node:18-alpine
WORKDIR /react-app/
COPY public/ /react-app/public
COPY src/ /react-app/src
COPY ./.env /react-app/
COPY package.json /react-app/
RUN npm install --legacy-peer-deps
CMD ["npm","start"]