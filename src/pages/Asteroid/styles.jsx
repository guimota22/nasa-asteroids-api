import styled from "styled-components";

const AsteroidContainer = styled.div`
  min-height: 100vh;

  & h1 {
    text-align: center;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }
`;

const AsteroidInfo = styled.div`
  & p {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export { AsteroidContainer, AsteroidInfo };
