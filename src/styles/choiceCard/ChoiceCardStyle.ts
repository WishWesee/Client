import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  gap: 1.25rem; /* 20px -> 1.25rem */

  @media (min-width: 768px) {
    padding: 30px 32px 60px 32px;
    gap: 60px;
  }

  @media (min-width: 1200px) {
    padding: 30px 32px 60px 32px;
    gap: 80px;
  }
`;

export const Wrap_Card = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0.75rem 0 0 0; /* 12px -> 0.75rem */
  width: 100%;
  flex-direction: column;
  background-color: var(--Blue5);
  gap: 0.75rem; /* 12px -> 0.75rem */

  @media (min-width: 768px) {
    padding: 16px 0 0 0; /* 12px -> 0.75rem */
    gap: 20px;
  }

  @media (min-width: 1200px) {
    padding: 18px 0 0 0; /* 12px -> 0.75rem */
    gap: 24px;
  }
`;

export const HorizontalSB_Content = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 0 0 0 1.25rem; /* 20px -> 1.25rem */
  gap: 0.5rem; /* 8px -> 0.5rem */
  overflow-x: auto;
  white-space: nowrap; /* 요소들이 줄바꿈되지 않도록 설정 */

  @media (min-width: 768px) {
    padding: 0 0 0 16px; /* 20px -> 1.25rem */
  }

  @media (min-width: 1200px) {
    padding: 0 0 0 18px; /* 20px -> 1.25rem */
  }
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
  background-color: var(--White);
  cursor: pointer;
`;

export const Img_Content_Card = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
  grid-gap: 0.75rem; /* 요소 간 간격 */
  box-sizing: border-box;
  margin: 0 auto; /* 중앙 정렬 */
  max-width: 390px;
  padding: 0 1.3125rem; /* 좌우 여백 설정 */

  @media (max-width: 389px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 16px 16px 16px;
      max-width: 704px;
      gap: 16px;
  }

  @media (max-width: 343px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      padding: 0 16px 16px 16px;
      max-width: 704px;
      gap: 16px;
  }

  @media (max-width: 344px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 16px 16px 16px;
      max-width: 704px;
      gap: 12px;
  }

  @media (min-width: 768px) {
    padding: 0 16px 16px 16px;
    grid-template-columns: repeat(auto-fit, minmax(212px, 1fr)); 
    max-width: 704px;
    gap: 16px
  }

  @media (min-width: 1200px) {
    padding: 0 18px 18px 18px;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); 
    max-width: 1136px;
    gap: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgCard = styled.img`
  width: 152px; 
  height: 110px; 
  object-fit: cover;
  border-radius: 4px;

  @media (max-width: 389px) {
    width: 39vw;
    height: 104px;
  }

  @media (max-width: 343px) {
    width: 196px;
    height: 104px;
  }

  @media (min-width: 768px){
  width: 196px;
  height: 143px;
  }

  @media (min-width: 1200px){
  width: 244px;
  height: 179px;
  }
`;

export const CropperContainer = styled.div`
  width: 350px;
  height: 350px;
  max-width: 350px;
  max-height: 350px;

  @media (min-width: 768px) {
    width: 634px;
    height: 634px;
    max-width: 634px;
    max-height: 634px;
  }
`;
