FROM node:12.21.0
EXPOSE 3001
WORKDIR ./
COPY ./ ./backd
COPY package.json backd/package.json
WORKDIR ./backd
RUN npm install
CMD ["node", "index.js"]