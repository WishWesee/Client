import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  border-radius: 8px;
  background: var(--Blue5, #eaf0f7);
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.p`
  font: var(--Selected-BtnName-FileName);
  color: var(--Black);
  margin: 0;
`;

export const Text = styled.p`
  font: var(--AdditionalText);
  color: var(--Black);
  margin: 0;
`;

export const SlideButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DateContainer = styled.div`
  gap: 4px;
  align-items: center;
  width: 100%;
`;

export const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  height: fit-content;
`;

export const SelectDateButton = styled.button`
  display: flex;
  height: 48px;
  width: 100%;
  padding: 12px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 2px solid var(--Blue-10, #d7e9ff);
  background: var(--White, #fcfcfd);
  cursor: pointer;
`;

export const ButtonText = styled.p`
  font: var(--Unselected-Field-rNBLeft);
  color: var(--Gray40);
`;

export const SelectTimeButton = styled.button`
  display: flex;
  height: 48px;
  padding: 12px;
  min-width: 128px;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  border: 2px solid var(--Blue-10, #d7e9ff);
  background: var(--White, #fcfcfd);
  cursor: pointer;
`;

export const ItemContainer = styled.div<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  padding: 8px 4px;
  margin-bottom: 4px;
  position: relative;
  gap: 4px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--Blue10)" : "transparent"};

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--Gray10);
  }

  &:last-of-type::after {
    display: none;
  }
`;

export const Index = styled.p`
  font: var(--Unselected-Field-rNBLeft);
  color: var(--Black);
  width: 20px;
  text-align: center;
`;

export const AddButton = styled.button`
  display: flex;
  height: 48px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--Primary, #358ffe);
  color: white;
  font: var(--Selected-BtnName-FileName);
  border: none;
  cursor: pointer;
`;
