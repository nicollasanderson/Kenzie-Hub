import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;
  margin: 0 auto;

  p {
    margin: 18px 0;
    text-align: left;
    color: white;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid white;
  background-color: var(--grey2);
  border-radius: 4px;
  padding-left: 13px;
  display: flex;

  svg {
    height: 100%;
    width: 50%;
    color: var(--grey1);
  }
  button {
    background-color: transparent;
    border: none;
  }

  input {
    background-color: transparent;
    flex: 1;
    align-items: center;
    color: white;
    border: none;
    height: 100%;
  }
`;
