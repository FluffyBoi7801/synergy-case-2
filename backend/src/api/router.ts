import { Router } from "express";
import { API_ENDPOINTS, USERS_API_ENDPOINTS } from "./constants";
import { versionService } from "./services/version";
import { userService } from "./services/user";
import { authenticateToken } from "./services/utils";

const router = (() => {
  const router = Router();

  router.get(API_ENDPOINTS.VERSION, versionService.getServiceVersion);

  router.post(API_ENDPOINTS.USERS, userService.register);
  router.get(
    `${API_ENDPOINTS.USERS}${USERS_API_ENDPOINTS.ACTIVATE}/:uuid`,
    userService.activate,
  );
  router.post(API_ENDPOINTS.LOGIN, userService.login);
  router.get(
    `${API_ENDPOINTS.USERS}${USERS_API_ENDPOINTS.CURRENT}`,
    authenticateToken,
    userService.current,
  );

  return router;
})();

export default router;
