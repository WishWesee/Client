import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  padding: 0px 20px;
  background-color: #fcfcfd;

   @media (min-width: 768px) {
        height: auto;
    }
`;

export const HeaderComp = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 52px;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 100%;
  height: auto;
  max-width: 100%;

  @media (min-width: 768px) {
    gap: 16px;
    justify-content: center;
  }
`;
