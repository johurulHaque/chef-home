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
import RegisterLayout from "../layout/RegisterLayout";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />,
      }
    ],
  },
  {
    path: "/register",
    element: <RegisterLayout />,
    errorElement: <ErrorPage />,
    children: [     
      {
        path: "/register",
        element: <Register />,
      }
    ],
  },
  {
    path: "/chef",
    element: <PrivateRoute><RecipeLayout /></PrivateRoute>,
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
    path: "/",
    // element: <PrivateRoute> <Main></Main></PrivateRoute>,
    element:  <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
