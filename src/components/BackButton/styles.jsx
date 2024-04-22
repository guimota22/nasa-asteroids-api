import styled from "styled-components";

const Button = styled.button`
  border: none;
  display: block;
  position: relative;
  padding: 0.7em 2.4em;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  color: royalblue;
  z-index: 1;
  font-family: inherit;
  font-weight: 500;
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    color: white;
  }

  &:hover Span::before {
    transform: translate(-50%, -50%) rotate(-90deg);
    width: 100%;
    background: royalblue;
  }
`;

const SpanButton = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: -1;
  border: 4px solid royalblue;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 8%;
    height: 500%;
    background: var(--lightgray);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-60deg);
    transition: all 0.3s;
  }
`;

export { Button, SpanButton };
