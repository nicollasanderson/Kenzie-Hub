import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBox = styled.div`
  height: 310px;
  width: 90%;
  max-width: 400px;
  border-radius: 4px;
  background-color: var(--grey3);

  > div {
    background-color: var(--grey2);
    display: flex;
    padding: 0 15px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-radius: 4px 4px 0 0;

    > button {
      width: 10px;
      height: 10px;
      background-color: transparent;
      border: none;
    }
  }

  form {
    padding: 0 10px;
  }
`;
