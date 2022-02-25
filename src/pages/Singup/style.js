import styled from "styled-components";
import { GreyBox } from "../../components/GreyBox/style";

export const Span = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 340px) {
    margin-top: 100px;
  }

  button {
    width: 80px;
  }
`;
export const FullContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreyBoxSing = styled(GreyBox)`
  display: flex;
  flex-flow: column;

  > p {
    color: var(--grey1);
    text-align: center;
    margin-top: 27px;
  }
`;
