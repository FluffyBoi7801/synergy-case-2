import { Router } from "express";
import { API_ENDPOINTS } from "./constants";
import { versionService } from "./services/version";

const router = (() => {
  const router = Router();

  router.get("/test", (req, res) => {
    console.log("test /api");
    res.status(200).json({ message: "Hello World" });
  });

  router.get(API_ENDPOINTS.VERSION, versionService.getServiceVersion);

  return router;
})();

export default router;
