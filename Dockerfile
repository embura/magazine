FROM node:10.16.0

ENV HOME=/home/app

COPY package*.json $HOME/

WORKDIR $HOME

RUN npm cache clean --force && npm install --silent --progress=false

COPY . $HOME

EXPOSE 8000 7000

CMD ["npm", "start"]