import styled from "styled-components";

export const Container = styled.div`
  margin-top: 84px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 12px;
`;

export const TitleInput = styled.input`
  border: none;
  width: 100%;
  height: 76px;
  border-bottom: 2px solid var(--Gray10);
  text-align: center;
  color: var(--Black);
  font: var(--TitleText);

  &::placeholder {
    color: var(--Black);
    font: var(--TitleText);
  }

  &:focus {
    outline: none;
  }
`;

export const BlocksContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
  color: black;
`;
