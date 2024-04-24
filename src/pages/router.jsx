import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Home from "./Home";
import Asteroid from "./Asteroid";
import AboutMe from "./AboutMe";

export const router = createBrowserRouter([
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