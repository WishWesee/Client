import styled from 'styled-components';

export const HorizontalSBActive = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 3.75rem; /* 60px -> 3.75rem */
  height: 2rem; /* 32px -> 2rem */
  padding: 0.5rem 1rem; /* 그대로 유지 (이미 rem 단위) */
  border-radius: 0.25rem; /* 4px -> 0.25rem */
  align-items: center;
  justify-content: center;
  background-color: var(--Primary);
  font: var(--Selected-BtnName-FileName);
  color: var(--White);
`;

export const HorizontalSBDefault = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 2rem; /* 32px -> 2rem */
  padding: 0.5rem 1.01rem; /* 그대로 유지 (이미 rem 단위) */
  border-radius: 0.25rem; /* 4px -> 0.25rem */
  align-items: center;
  justify-content: center;
  background-color: var(--White);
  font: var(--Unselected-Field-rNBLeft);
  color: var(--Black);
`;
