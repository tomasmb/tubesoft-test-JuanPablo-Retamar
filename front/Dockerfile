FROM node:12.21.0
EXPOSE 3000
WORKDIR ./
COPY ./ ./frontd
COPY package.json frontd/package.json
WORKDIR ./frontd
RUN npm install
CMD ["npm", "start"]