FROM node:16-stretch AS build
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install --quiet
COPY . .
RUN npm run build


FROM node:16-stretch
COPY --from=build /app/dist /app/dist
COPY package.json /app/
WORKDIR /app
RUN npm install --only=production --quiet
CMD node dist/index.js
