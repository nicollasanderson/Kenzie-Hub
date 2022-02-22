import styled from "styled-components";

export const ButtonContainer = styled.div`
  height: 39px;
  margin: 20px 0;

  button {
    background-color: ${(props) => props.color};
    color: white;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`;
