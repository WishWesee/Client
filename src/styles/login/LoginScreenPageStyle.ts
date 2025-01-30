import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #fcfcfd;
  box-sizing: border-box;
  padding: 0px 20px;

  @media (max-width: 389px) {
    padding: 0;
  }

  @media (min-width: 768px) {
    height: auto;
  }
`;

export const HeaderComp = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 54px;
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
