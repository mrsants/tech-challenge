FROM node:11-alpine
RUN addgroup -S nupp && adduser -S -g nupp nupp

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN chown -R nupp:nupp .
USER nupp
EXPOSE 3400

CMD ["npm", "run", "dev"]