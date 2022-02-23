import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  width: 100%;
  margin: 0 auto;

  > p {
    margin: 18px 0;
  }
`;

export const SelectStyled = styled.div`
  width: 100%;
  height: 40px;
  background-color: var(--grey2);
  border: 1px solid white;
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  select {
    background-color: transparent;
    border: none;
    flex: 1;
    color: var(--grey1);
  }
`;
