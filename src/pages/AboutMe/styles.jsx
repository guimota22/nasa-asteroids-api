import styled from "styled-components";

const AboutContainer = styled.div`
  height: 100vh;

  & h1 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }

  & img {
    width: 500px;
    height: 500px;
    border-radius: 1000px;
  }
`;

const About = styled.div`
  display: flex;
  justify-content: center;
`;
const AboutText = styled.div`
  width: 500px;
  height: 500px;
  border: solid 1px #777;
  margin-right: 3rem;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 1.5rem;
`;

export { AboutContainer, About, AboutText }
