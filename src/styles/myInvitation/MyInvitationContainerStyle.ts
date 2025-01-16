import styled from 'styled-components';

export const LetterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--White);
`;

export const LetterImgBox = styled.div`
    box-sizing: border-box;
    height: 120px;
    border-radius: 4px 4px 0px 0px;

    /*@media (min-width: 768px) {
    height: 156px;
    } API로 사진 받아오는거 보고 처리하기*/
`;

export const LetterTextBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4px 0px 4px 8px;
    gap: 4px;

    /*@media (min-width: 768px) {
    padding: 8.5px 4px 8.5px 8px;
    }*/
`;

export const LetterTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 104px;
    font: var(--Selected-BtnName-FileName);
    color: var(--Black);
`;

export const LetterDateBox = styled.div`
    display: flex;
    align-items: center;
    font: var(--FeatureBodyText);
    color: var(--Gray40);
`;