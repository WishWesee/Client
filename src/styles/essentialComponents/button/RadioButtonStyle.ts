import styled from 'styled-components';

export const RadioButton = styled.div`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  border: 2px solid #e1e1e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RadioCircle = styled.div`
  width: 20px;
  height: 20px;
  margin: 2px;
  border-radius: 50%;
  transition: background-color 0.15s ease;

  &.toggled {
    background-color: #358ffe;
  }
`;