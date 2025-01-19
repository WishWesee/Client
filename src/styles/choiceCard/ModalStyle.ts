import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; /* 퍼센트는 그대로 유지 */
  height: 100%; /* 퍼센트는 그대로 유지 */
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  width: 21.875rem; /* 350px -> 21.875rem */
  height: 10.25rem; /* 164px -> 10.25rem */
  background-color: var(--White);
  padding: 2.5rem 1.25rem; /* 40px -> 2.5rem, 20px -> 1.25rem */
  border-radius: 0.5rem; /* 8px -> 0.5rem */
  gap: 1.25rem; /* 20px -> 1.25rem */
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--RegularContext);
  color: var(--Black);
`;
