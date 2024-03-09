FROM node:20.11.1-slim

USER root

RUN npm install -g pnpm

USER node


WORKDIR /home/node/app

CMD ["tail", "-f", "/dev/null"]