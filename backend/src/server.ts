import express from "express";
import { env } from "./utils";
import { API_DOCS_ENDPOINT, API_ENDPOINT, STANDS } from "./constants";
import swaggerUi from "swagger-ui-express";
import router from "./api/router";
import {
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import { version } from "../package.json";
import { swaggerRegistrator } from "./api/schemes";

const app = express();

const PORT = env.PORT || 8000;

app.use(express.json());

console.log(`Запуск сервиса в режиме ${env.NODE_ENV}`);

app.use(API_ENDPOINT, router);

const startService = () => {
  if (env.NODE_ENV !== STANDS.PRODUCTION) {
    console.log("Подключена спецификация swagger");
    const registry = new OpenAPIRegistry();

    swaggerRegistrator(registry);

    const generator = new OpenApiGeneratorV3(registry.definitions);

    const openApiDocument = generator.generateDocument({
      openapi: "3.0.0",
      info: {
        version: version,
        title: "Blogger API",
      },
      servers: [{ url: "/api" }],
    });

    openApiDocument.components = {
      securitySchemes: {
        refreshToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    };

    app.use(
      API_DOCS_ENDPOINT,
      swaggerUi.serve,
      swaggerUi.setup(openApiDocument),
    );
  }

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

export default startService;
