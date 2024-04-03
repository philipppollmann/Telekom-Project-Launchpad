# Step 1: Build the app in a node.js environment
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Step 2: Serve the app from a lightweight node environment
FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]