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

    @media (min-width: 768px) {
    height: 156px;
    }

    @media (min-width: 1200px) {
    height: 183px;
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
    gap: 104px;
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