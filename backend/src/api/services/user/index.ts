import {
  activationHandler,
  getCurrentUser,
  loginHandler,
  registrationHandler,
} from "./handlers";
import { logoutHandler } from "./handlers/logoutHandler";

export const userService = {
  register: registrationHandler,
  activate: activationHandler,
  login: loginHandler,
  logout: logoutHandler,
  current: getCurrentUser,
};
