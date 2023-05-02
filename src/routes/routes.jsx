import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


  const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout />,
        children:[    
          {
            path: "/login",
            element: <Login />,        
          },
          {
            path: "/register",
            element: <Register />,        
          }
        ]
      },
    {
      path: "/home",
      element: <Main></Main>,
    },
  ]);

  export default router;