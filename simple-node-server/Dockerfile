# Gebruik een officiële Node.js image als basis
FROM node:18-slim

# Zet de werkdirectory in de container
WORKDIR /app

# Kopieer package.json en package-lock.json naar de container
COPY package*.json ./

# Installeer de afhankelijkheden
RUN npm install

# Kopieer de rest van de applicatie naar de container
COPY . .

# Expose poort 3000 zodat we toegang hebben tot de server
EXPOSE 3000

# Start de Express-server
CMD ["node", "server.js"]

