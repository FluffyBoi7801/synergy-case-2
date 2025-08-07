import { Router } from "express";
import { API_ENDPOINTS } from "./constants";
import { versionService } from "./services/version";
import { userService } from "./services/user";

const router = (() => {
  const router = Router();

  router.get(API_ENDPOINTS.VERSION, versionService.getServiceVersion);
  router.post(API_ENDPOINTS.USERS, userService.register);

  return router;
})();

export default router;
