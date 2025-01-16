import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: calc( 100vh - 205.7px );
  align-items: center;
  justify-content: center;
  background-color: var(--Black);
`;

export const Bottom = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0 2.5rem 0; /* 20px -> 1.25rem, 40px -> 2.5rem */
  width: 100%;
  cursor: pointer;
  background-color: var(--Black);
  
`;
