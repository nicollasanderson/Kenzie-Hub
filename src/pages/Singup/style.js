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
  height: 670px;
`;

// export const BoxContainer = styled.div`
//   height: 100%;
//   width: 300px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-flow: column;

//   h2 {
//     color: var(--primary);
//     margin: 20px 0;
//   }
//   h3 {
//     margin-top: 34px;
//     margin-bottom: 22px;
//     text-align: center;
//   }

//   > div {
//     height: 570px;
//     max-height: 200%;
//     border-radius: 3px;
//     background-color: var(--grey3);
//     width: 100%;
//   }
//   > p {
//     color: var(--grey1);
//     text-align: center;
//     margin-top: 27px;
//   }
// `;
