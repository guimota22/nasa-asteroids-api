import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;

  & h1 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
  }

  & > :last-child {
    margin-bottom: 0;
  }
`;

const AsteroidInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #777;

  & h2 {
    margin-bottom: 0.5rem;
  }

  & p {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
`;

export { Wrapper, AsteroidInfo };
