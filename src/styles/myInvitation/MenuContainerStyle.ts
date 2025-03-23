import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 0;
    justify-content: space-between;
  }
`;

export const MenuContainerWithArrow = styled.div`
  display: flex;
  width: calc(100vw - 40px);
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: auto;
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
    width: auto;
  }
`;

export const MenuTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--PageName);
  color: var(--Black);
`;

export const MenuSubBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--RegularContext);
  color: var(--Black);
`;

export const SlideBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  overflow-x: auto;
  padding-right: 20px;

  @media (min-width: 768px) {
    gap: 20px;
    padding-right: 0px;
  }

  @media (min-width: 1200px) {
    gap: 24px;
    padding-right: 0px;
  }
`;

export const NoInvitationText = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  align-items: center;
  justify-content: center;
  font: var(--RegularContext);
  color: var(--Gray40);

  @media (min-width: 768px) {
    height: 85px;
  }

  @media (min-width: 1200px) {
    height: 105px;
  }
`;
