import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  align-items: center;
  align-self: stretch;
  box-sizing: border-box;
  height: fit-content;
  width: 100%;

  border-radius: 4px;
  border: 2px solid var(--Blue10, #d7e9ff);
  background: var(--White, #fcfcfd);
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.p`
  color: var(--Black, #151516);
  font: var(--Unselected-Field-rNBLeft);
`;

export const Address = styled.p`
  color: var(--Grey40, #88898a);
  font: var(--AdditionalText);
`;
