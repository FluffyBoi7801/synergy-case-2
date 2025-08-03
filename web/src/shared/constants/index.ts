export const ROOT_PATH = "/";

export const SERVICES_ROOTS: Record<string, string> = {
  BLOG: "blog",
};

export const SERVICES_PATHS: Record<keyof typeof SERVICES_ROOTS, string> = {
  BLOG: "/blog",
};

export const BLOG_ROUTES_KEYS: Record<string, string> = {
  POSTS: "posts",
};

export const BLOG_ROUTES_PATHS: Record<keyof typeof BLOG_ROUTES_KEYS, string> =
  {
    POSTS: "/posts",
  };
