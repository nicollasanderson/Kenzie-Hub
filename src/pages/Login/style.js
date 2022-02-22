import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  h2 {
    color: var(--primary);
    margin: 20px 0;
  }
  h3 {
    margin-top: 34px;
    margin-bottom: 22px;
    text-align: center;
  }

  > div {
    height: 450px;
    border-radius: 3px;
    background-color: var(--grey3);
    width: 100%;
  }
`;

export const BoxContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  > p {
    color: var(--grey1);
    text-align: center;
    margin-top: 27px;
  }
`;
