import styled from "styled-components";

export const Container = styled.div<{ $isCheckComponent: boolean }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: ${(props) => (props.$isCheckComponent ? 0 : 50)}px;
`;
