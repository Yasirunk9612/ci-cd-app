FROM node:20-slim
WORKDIR /app
COPY ./app /app
COPY . .
EXPOSE 3000
CMD ["npm" , "start"]