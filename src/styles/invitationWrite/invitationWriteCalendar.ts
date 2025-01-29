import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  background-color: var(--Blue5);
  border-radius: 8px;
  padding: 20px;
  margin-top: 80px;
  flex-direction: column;
  /* z-index: 1; */
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  justify-content: space-between;
`;

export const Label = styled.p`
  font: var(--Selected-BtnName-FileName);
  color: var(--Black);
  margin: 0;
`;

export const Text = styled.p`
  font: var(--AdditionalText);
  color: var(--Gray40);
  margin: 0;
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
`;

export const SelectDateButton = styled.button`
  display: flex;
  margin-top: 14px;
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
  margin-top: 14px;
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
