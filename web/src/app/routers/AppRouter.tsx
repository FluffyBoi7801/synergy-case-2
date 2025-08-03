import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import {
  BLOG_ROUTES_KEYS,
  ROOT_PATH,
  SERVICES_PATHS,
  SERVICES_ROOTS,
} from "../../shared/constants";
import Layout from "../layout";
import { Posts } from "../../pages/blog";

const AppRouter = () => {
  const routes: RouteObject[] = [
    {
      path: ROOT_PATH,
      element: <Layout />,
      children: [
        {
          path: SERVICES_ROOTS.BLOG,
          element: <Outlet />,
          children: [
            { path: BLOG_ROUTES_KEYS.POSTS, element: <Posts /> },
            {
              path: "",
              element: <Navigate to={"posts"} />,
            },
          ],
        },
        {
          path: ROOT_PATH,
          element: <Navigate to={SERVICES_ROOTS.BLOG} />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to={ROOT_PATH} />,
    },
  ];

  const router = createBrowserRouter(routes, {});

  return <RouterProvider router={router} />;
};

export default AppRouter;
