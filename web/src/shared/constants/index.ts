export const ROOT_PATH = "/";

export const SERVICES_ROOTS: Record<string, string> = {
  BLOG: "blog",
  PROFILE: "profile",
};

export const SERVICES_PATHS: Record<keyof typeof SERVICES_ROOTS, string> = {
  BLOG: "/blog",
  PROFILE: "/profile",
};

export const BLOG_ROUTES_KEYS: Record<string, string> = {
  POSTS: "posts",
};

export const BLOG_ROUTES_PATHS: Record<keyof typeof BLOG_ROUTES_KEYS, string> =
  {
    POSTS: "/posts",
  };

export const COLORS = {
  WHITE: "white",
  RED: "red",
};

export const VALIDATION_ERRORS = {
  REQUIRED: "Обязательное поле",
  EMAIL: "Некорректный формат email",
  PASSWORD_MISMATCH: "Пароли не совпадают",
  PASSWORD_TOO_SHORT: "Пароль должен быть не менее 8 символов",
  PASSWORD_NO_UPPERCASE: "Пароль должен содержать хотя бы одну заглавную букву",
  PASSWORD_NO_SPECIAL_CHAR: "Пароль должен содержать хотя бы один спецсимвол",
};
