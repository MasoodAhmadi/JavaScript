FROM node:alpine

COPY ./ /opt/app

RUN cd /opt/app && npm install 

WORKDIR /opt/app

CMD ["npm", "run", "dev"]
