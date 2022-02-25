import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--grey4);
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 73px;
  justify-content: space-between;

  h2 {
    color: var(--primary);
    margin: 20px 0;
    margin-left: 13px;
  }
  h3 {
    margin: 22px;
    text-align: center;
  }
  button {
    width: 56px;

    margin-right: 13px;
  }

  @media (min-width: 700px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const DivInfoUser = styled.div`
  width: 100%;
  height: 131px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  border-top: 1px solid var(--grey3);
  border-bottom: 1px solid var(--grey3);

  h3 {
    margin-left: 13px;
    margin-bottom: 10px;
  }
  p {
    color: var(--grey1);
    margin-left: 13px;
  }
  @media (min-width: 700px) {
    > div {
      width: 70%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const MainInfos = styled.main`
  width: 100%;
  display: flex;
  flex-flow: column;
`;

export const DivTechInfos = styled.div`
  width: 100%;
  > div {
    height: 72px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 13px;
  }
  button {
    width: 32px;
    height: 32px;
  }
  @media (min-width: 700px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const TechListContainer = styled.div`
  border-radius: 3px;
  background-color: var(--grey3);
  width: 93%;
  margin: 0 auto;
  margin-bottom: 50px;

  > div {
    margin: 0 13px;
  }
  @media (min-width: 700px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const CardTech = styled.div`
  background-color: var(--grey4);
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 12px;
  margin: 16px 0;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: var(--grey2);
  }
`;

export const DivButtonModal = styled.div`
  display: flex;
  justify-content: space-between;
`;
