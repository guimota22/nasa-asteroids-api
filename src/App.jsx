import Navbar from "./components/Navbar";

import { Outlet } from "react-router-dom";

import Container from "./components/Container";

import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import "./styles/Theme.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "light-theme" : ""}`}>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;
