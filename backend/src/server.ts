import express from "express";

const app = express();

app.use(express.json());

const startService = () => {
  app.listen(8080);
};

export default startService;