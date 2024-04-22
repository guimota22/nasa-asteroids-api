import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Blinker';
}

html {
  background-color: #0e1217;
  color: #fff;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #fff;
  opacity: 0.7;
  transition: 0.3;
}

a:hover {
  opacity: 1;
}

p {
  color: #a9abb3;
}
`;
