FROM node:24
WORKDIR /home/app/
COPY . .
RUN npm install && npm run build
USER node
EXPOSE 3005
ENTRYPOINT ["./entrypoint.sh"]
