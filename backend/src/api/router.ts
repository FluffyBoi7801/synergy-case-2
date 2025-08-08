import { Router } from "express";
import { API_ENDPOINTS } from "./constants";
import { versionService } from "./services/version";
import { userService } from "./services/user";

const router = (() => {
  const router = Router();

  router.get(API_ENDPOINTS.VERSION, versionService.getServiceVersion);

  router.post(API_ENDPOINTS.USERS, userService.register);
  router.get(`${API_ENDPOINTS.ACTIVATE}/:uuid`, userService.activate);

  return router;
})();

export default router;
