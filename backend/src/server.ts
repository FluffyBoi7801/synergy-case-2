import express from "express";
import { env } from "./utils";
import { API_ENDPOINT } from "./constants";
import router from "./api/router";

const app = express();

const PORT = env.PORT || 8000;

app.use(express.json());

console.log(`Запуск сервиса в режиме ${env.NODE_ENV}`);

app.use(API_ENDPOINT, router);

const startService = () => {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

export default startService;
