FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

# Migrar la DB
# RUN npx sequelize-cli db:migrate

COPY . .

CMD ["npm", "start"] 