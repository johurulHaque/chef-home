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
import BlogLayout from "../layout/BlogLayout";
import Blog from "../pages/Blog/Blog";

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
        loader: ({params})=> fetch(`https://chef-home-server-johurulhaque.vercel.app/chef/${params.id}`),
        element: <Recipe />,        
      }   
            
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
  {
    path: "/blog",
   
    element:  <BlogLayout></BlogLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/blog",
        element: <Blog />,
      },
      
    ],
  },
]);

export default router;
