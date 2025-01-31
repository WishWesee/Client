import styled from 'styled-components';

export const FeatureBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 0.25rem;
    background-color: #EAF0F7;
    gap: 0.5625rem;
    padding: 0.75rem 0.625rem 0.625rem 0.75rem;
    border-radius: 0.25rem;
    background: linear-gradient(101.66deg, #A8CEFF 0%, #D7E9FF 100%);
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
        margin-bottom: 16px;
        width: 200px;
        height: 150px;
        gap: 12px;
    }

    @media (min-width: 1200px) {
        margin-bottom: 20px;
        width: 240px;
        height: 180px;
    }
    `;

export const FeatureBoxContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 0.25rem;
    background-color: #EAF0F7;
    gap: 0.5625rem;
    padding: 0.75rem 0.625rem 0.625rem 0.75rem;
    border-radius: 0.25rem;
    background: linear-gradient(101.66deg, #A8CEFF 0%, #D7E9FF 100%);
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
        margin-bottom: 16px;
        width: 200px;
        height: 150px;
    }

    @media (min-width: 1200px) {
        margin-bottom: 20px;
        width: 240px;
        height: 180px;
    }
    `;

export const FeatureBoxContainer3 = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-radius: 0.25rem;
    gap: 0.5625rem;
    padding: 0.75rem 0.27rem 0.625rem 0.75rem;
    border-radius: 0.25rem;
    background: linear-gradient(101.66deg, #A8CEFF 0%, #D7E9FF 100%);
    margin-top: 0.75rem;

    @media (min-width: 768px) {
        margin-top: 16px;
        width: 200px;
        height: 150px;
    }

    @media (min-width: 1200px) {
        margin-top: 20px;
        width: 240px;
        height: 180px;
    }
    `;

export const TextFeature = styled.div`
    white-space: pre-line;
    display: flex;
    flex-direction: column;
    text-align: left;
    box-sizing: border-box;
    width: 9.125rem;
    height: 3.75rem;

    @media (min-width: 768px) {
        width: 176px;
        height: 76px;
        gap: 8px;
    }

    @media (min-width: 1200px) {
        width: 216px;
        height: 88px;
        gap: 8px;
    }
    `;

export const TitleText = styled.div`
    color: var(--Primary);
    font: var(--BoldContext);

    @media (min-width: 1200px) {
        font: var(--PageName);
    }
    `;

export const SubText = styled.div`
    color: var(--Black);
    font: var(--FeatureBodyText);

    @media (min-width: 1200px) {
        font: var(--RegularContext);
    }
    `;

export const ImageBox = styled.div`
    display: flex;
    justify-content: end;
    `;
    
export const Rectangle1 = styled.div`
    box-sizing: border-box;
    height: 8.5rem; 
    margin-bottom: 0.75rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;

    @media (min-width: 768px) {
        margin-bottom: 16px;
        width: 200px;
        height: 150px;
    }

    @media (min-width: 1200px) {
        margin-bottom: 20px;
        width: 240px;
        height: 180px;
    }
    `;

    export const Rectangle2 = styled.div`
    box-sizing: border-box; 
    margin-bottom: 0.75rem;
    height: 8.5rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;

    @media (min-width: 768px) {
        margin-top: 123px;
        width: 200px;
        height: 150px;
        margin-bottom: 0;
    }

    @media (min-width: 1200px) {
        margin-top: 140px;
        width: 240px;
        height: 180px;
        margin-bottom: 0;
    }
    `;

    export const Rectangle3 = styled.div`
    box-sizing: border-box; 
    margin-bottom: 0.75rem;
    height: 8.5rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;

    @media (min-width: 768px) {
        margin-top: 40px;
        margin-bottom: 16px;
        width: 200px;
        height: 150px;
    }

    @media (min-width: 1200px) {
    margin-top: 40px;
    margin-bottom: 20px;
        width: 240px;
        height: 180px;
    }
    `;

    export const Rectangle5 = styled.div`
    box-sizing: border-box;
    margin-bottom: 0.75rem; 
    height: 8.5rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;

    @media (min-width: 768px) {
        margin-top: 16px;
        width: 200px;
        height: 150px;
    }

    @media (min-width: 1200px) {
        margin-top: 20px;
        width: 240px;
        height: 180px;
        margin-bottom: 0;
    }
    `;

    export const Rectangle6 = styled.div`
    box-sizing: border-box;
    height: 4.375rem;
    border-radius: 0.25rem;
    background-color: #EAF0F7;
    
    @media (min-height: 845px) {
        height: 8.5rem
    }

    `;
    

    export const Rectangle7 = styled.div`
    box-sizing: border-box;
    margin-top: 3.8125rem; 
    height: 8.5rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;
    `;
    
    export const Rectangle8 = styled.div`
    box-sizing: border-box;
    margin-top: 0.75rem; 
    height: 8.5rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;
    `;

    export const Rectangle10 = styled.div`
    box-sizing: border-box;
    margin-top: 0.75rem; 
    height: 8.5rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;
    `;

    export const Rectangle11 = styled.div`
    box-sizing: border-box;
    margin-top: 0.75rem;
    height: 8.5rem; 
    border-radius: 0.25rem;
    background-color: #EAF0F7;
    `;