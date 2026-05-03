FROM node:18

WORKDIR /app

COPY backend/package.json ./backend/
RUN npm install --prefix backend

COPY . .

CMD ["node", "backend/server.js"]
