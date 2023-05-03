import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProviders from "./providers/AuthProviders.jsx";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProviders>
);
