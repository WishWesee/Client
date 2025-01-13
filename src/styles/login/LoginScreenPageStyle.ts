import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  height: calc( 100vh - 54px );
  padding: 0px 20px;
  background-color: #fcfcfd;
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
  height: 100vh;
  max-width: 100%;
`;
