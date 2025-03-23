import styled from "styled-components";

export const LetterContainer = styled.div`
  display: flex;
  min-width: 160px;
  flex-direction: column;
  background-color: var(--White);
  border-radius: 0px 0px 4px 4px;

  @media (min-width: 768px) {
    min-width: 204px;
    min-height: 210px;
    border-radius: 0px 0px 8px 8px;
  }

  @media (min-width: 1200px) {
    min-width: 328px;
    min-height: 255px;
  }
`;

export const LetterImgBox = styled.div`
  box-sizing: border-box;
  border-radius: 4px 4px 0px 0px;

  @media (min-width: 768px) {
    border-radius: 8px 8px 0px 0px;
  }
`;

export const LetterTextBox = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 4px 0px 4px 8px;
  gap: 4px;

  @media (min-width: 768px) {
    padding: 8.5px 4px 8.5px 8px;
    width: 100%;
    height: 54px;
  }

  @media (min-width: 1200px) {
    padding: 8px 4px 8px 8px;
    width: 100%;
    height: 72px;
  }
`;

export const LetterTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: var(--Selected-BtnName-FileName);
  color: var(--Black);

  @media (min-width: 1200px) {
    font: var(--PageName);
  }
`;

export const LetterDateBox = styled.div`
  display: flex;
  align-items: center;
  font: var(--FeatureBodyText);
  color: var(--Gray40);

  @media (min-width: 1200px) {
    font: var(--RegularContext);
  }
`;
