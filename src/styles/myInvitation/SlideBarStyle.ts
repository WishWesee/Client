import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    /*height: 262px;*/
    background-color: var(--Blue5);
    padding: 20px 0px 20px 20px;
    gap: 20px;
    border-radius: 8px;

    @media (min-width: 768px) {
    /*height: 302px;*/
    padding: 18px 18px 18px 18px;
    }

    @media (min-width: 1200px) {
    /*height: 339px;*/
    padding: 20px 20px 20px 20px;
    gap: 24px;
    }
`;