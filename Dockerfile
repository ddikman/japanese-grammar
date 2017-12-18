FROM node:carbon

# Create app directory
WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80