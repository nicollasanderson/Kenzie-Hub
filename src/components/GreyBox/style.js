import styled, { keyframes } from "styled-components";

const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px);
}
to{
    opacity: 1;
    transform: translateX(0px);
}
`;

export const BoxContainer = styled.div`
  height: 500px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 50px 0;
  animation: ${appearFromRight} 1s;

  h2 {
    color: var(--primary);
    margin: 20px 0;
  }
  h3 {
    margin: 22px;
    text-align: center;
  }

  > p {
    color: var(--grey1);
    text-align: center;
    margin-top: 27px;
  }
`;

export const GreyBox = styled.div`
  height: 100%;
  border-radius: 3px;
  background-color: var(--grey3);
  width: 100%;
  padding: 20px;

  strong {
    font-size: 12px;
    color: var(--negative);
  }
`;
