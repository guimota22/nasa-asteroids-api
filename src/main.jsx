import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Home from "./pages/Home/index.jsx";
import Asteroid from "./pages/Asteroid/index.jsx";
import AboutMe from "./pages/AboutMe/index.jsx";

import { GlobalStyle } from "./styles/GlobalStyle.jsx";

import { ThemeProvider } from "./context/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/asteroid/:id",
        element: <Asteroid />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
