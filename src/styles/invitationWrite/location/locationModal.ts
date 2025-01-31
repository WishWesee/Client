import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 60px;
  /* left: -20px; */
  box-sizing: border-box;
  display: flex;
  width: 310px;
  gap: 15px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  border: 2px solid var(--Blue10, #d7e9ff);
  background: var(--White, #fcfcfd);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ItemContainer = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--Gray5);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const Title = styled.p`
  color: var(--Black);
  font: var(--Unselected-Field-rNBLeft);
  margin: 0;
`;

export const Address = styled.p`
  color: var(--Gray40);
  font: var(--AdditionalText);
  margin: 0;
`;
