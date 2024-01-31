// ** Router imports
import { lazy } from "react";

// ** Router imports
import { useRoutes, Navigate } from "react-router-dom";


// ** Hooks Imports
import useLayout from '@hooks/useLayout';


// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "../utility/Utils";

// ** GetRoutes
import { getRoutes } from "./routes/routes.js";

// import Editaddpost from "../views/posts/editaddpost";

// ** Components
// const Error = lazy(() => import("../views/pages/misc/Error"));
// const Login = lazy(() => import("../views/pages/authentication/Login"));
// const NotAuthorized = lazy(() => import("../views/pages/misc/NotAuthorized"));


const Login = lazy(() => import("./login.js"));


const Router = () => {
  // ** Hooks
  const { layout } = useLayout();

  const allRoutes = getRoutes(layout);
  const getHomeRoute = () => {
    const user = getUserData();
    if (user) {
      return getHomeRouteForLoggedInUser(user.role);
    } else {
      return "/login";
    }
  };

  const routes = useRoutes([
    {
      path: "/",
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
  
    
    
    ...allRoutes,
  ]);

  return routes;
};

export default Router;
