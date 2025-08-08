import {
  activationHandler,
  loginHandler,
  registrationHandler,
} from "./handlers";

export const userService = {
  register: registrationHandler,
  activate: activationHandler,
  login: loginHandler,
  current: () => {},
};
