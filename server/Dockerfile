FROM postgres:10.3

WORKDIR /app
COPY  package.json . 
RUN npm install 
COPY src/index.ts . 
CMD ["node", "src/index.ts"]