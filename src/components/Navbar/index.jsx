import { Link } from "react-router-dom";

import "./ButtonAboutMe.css";

import { NavbarStyle, Logo, List } from "./styles";

const Navbar = () => {
  return (
    <NavbarStyle>
      <Link to={"/"} style={{ opacity: "1" }}>
        <Logo src="src/assets/NASA_logo.svg.png" />
      </Link>

      <List>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about-me"} className="aboutme-btn">
            Sobre mim
          </Link>
        </li>
      </List>
    </NavbarStyle>
  );
};

export default Navbar;
