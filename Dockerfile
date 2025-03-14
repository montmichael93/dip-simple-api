# Base image
FROM --platform=linux/amd64 node:18 
## FROM node:18 #original
# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
#COPY .env .env.development ./ #no env for the time being

# Creates a "dist" folder with the production build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the production build
CMD npm run migration:run && npm run start:prod

