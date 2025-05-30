FROM node:24
USER root
WORKDIR /home/app/
COPY . .

RUN npm install
RUN npm run build
EXPOSE 3005
ENTRYPOINT ./entrypoint.sh

