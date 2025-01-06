import styled from 'styled-components';

export const CautionButton = styled.button`
  display: flex;
  width: 148px;
  height: 40px;
  gap: 0;
  border-radius: 8px;
  opacity: 0;
  background-color: #e1e1e2;
  transition: background-color 0.2s ease, color 0.2s ease;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  outline: none;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;

  color: #88898a;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

  &.red {
    background-color: #ff4b4b;
    color: #fcfcfd;
  }

  &.blue {
    background-color: #358ffe;
    color: #fcfcfd;
  }
`;
