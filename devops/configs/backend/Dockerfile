FROM node:20-alpine
ENV PORT=8080
WORKDIR /backend
COPY ./ ./
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]