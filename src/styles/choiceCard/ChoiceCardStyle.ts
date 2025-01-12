import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: calc( 100vh - 107.6px );
  flex-direction: column;
  gap: 1.25rem; /* 20px -> 1.25rem */
`;

export const Wrap_Card = styled.div`
  display: flex;
  box-sizing: border-box;
  padding-top: 0.75rem; /* 12px -> 0.75rem */
  width: 100%;
  flex-direction: column;
  background-color: var(--Blue5);
  gap: 0.75rem; /* 12px -> 0.75rem */
`;

export const HorizontalSB_Content = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 0 0 1.25rem; /* 20px -> 1.25rem */
  gap: 0.5rem; /* 8px -> 0.5rem */
  overflow-x: auto;
  white-space: nowrap; /* 요소들이 줄바꿈되지 않도록 설정 */
`;

export const Btn_hSB_New = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 4rem; /* 64px -> 4rem */
  height: 2rem; /* 32px -> 2rem */
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem; /* 4px -> 0.25rem */
  padding: 0.5rem; /* 8px -> 0.5rem */
  gap: 0.25rem; /* 4px -> 0.25rem */
  width: 100%; /*없앨거면 없애기*/
  background-color: var(--White);
`;

export const Img_Content_Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 1.3125rem; /* 21px -> 1.3125rem */
  gap: 0.75rem; /* 12px -> 0.75rem */
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  width: 100%; /*사진 크기 비율 이상하면 이거 width 관련 없애고 RectangleStyle에서 width: 10.5rem; 설정*/
  height: calc( 100vh - 500px );
  max-width: 100%;
  max-height: 100%;
  flex-direction: column;
  gap: 0.75rem; /* 12px -> 0.75rem */
`;

export const Bottom = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0 2.5rem 0; /* 20px -> 1.25rem, 40px -> 2.5rem */
  width: 100%;
  background-color: var(--White);
`;
