import styled from 'styled-components';

export const SlideButton = styled.div`
  box-sizing: border-box;
  width: 35px;
  height: 20px;
  background-color: #e1e1e2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &.toggled {
    background-color: #d7e9ff;
  }
`;

export const SlideCircle = styled.div`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  margin: 2px;
  background-color: #fcfcfd;
  border-radius: 50%;
  transition: transform 0.2s ease, background-color 0.2s ease;
  transform: translateX(0);

  &.toggled {
    background-color: #358ffe;
  }

  .toggled & {
    transform: translateX(15px);
  }
`;