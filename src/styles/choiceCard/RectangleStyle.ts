import styled from 'styled-components';

export const Rectangle = styled.div`
  width: 168px;
  height: 126px;
  min-width: 168px;
  min-height: 126px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #D9D9D9;

  @media (min-width: 768px){
  width: 212px;
  height: 159px;
  min-width: 212px;
  min-height: 159px;
  }

  @media (min-width: 1200px){
  width: 260px;
  height: 195px;
  min-width: 260px;
  min-height: 195px;
  }
`;
