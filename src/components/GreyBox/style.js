import styled from "styled-components";

export const BoxContainer = styled.div`
  height: 500px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

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
`;
