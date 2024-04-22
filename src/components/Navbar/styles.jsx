import styled from "styled-components";

const NavbarStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #17191f;
`;

const Logo = styled.img`
  width: 50px;
  background-image: url(${props => props.src});
  background-color: #17191f;
  
`

const List = styled.ul`
  display: flex;
  gap: 1rem;
`;

export { NavbarStyle, Logo, List };
