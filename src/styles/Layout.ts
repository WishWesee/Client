import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`;

export const Main = styled.main`
  flex: 1;
  width: 100%;
  /*padding: 0 20px;*/
  margin: 0 auto;
  box-sizing: border-box;
`;

export const HeaderComp = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 54px;
  border-bottom: 0.125rem solid #f4f4f4;
`;
