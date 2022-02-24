import styled from "styled-components";
import { GreyBox } from "../../components/GreyBox/style";

export const Span = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    width: 80px;
  }
`;

export const GreyBoxSing = styled(GreyBox)`
  height: 720px;

  > p {
    color: var(--grey1);
    text-align: center;
    margin-top: 27px;
  }
`;
