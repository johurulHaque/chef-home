import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import Recipe from "../pages/Recipe/Recipe";
import RecipeLayout from "../layout/RecipeLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/chef",
    element: <RecipeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":id",
        loader: ({params})=> fetch(`http://localhost:5000/chef/${params.id}`),
        element: <Recipe />,        
      },      
    ],
  },
  {
    path: "/home",
    // element: <PrivateRoute> <Main></Main></PrivateRoute>,
    element:  <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      
    ],
  },
]);

export default router;
