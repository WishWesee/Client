import styled from 'styled-components';

export const GreetingMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    padding-top: 75px;
    text-align: center;
    align-items: center;
    justify-content: center;
    white-space: pre-line;
    color: #151516; 
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.25rem;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

    .highlight {
        color: #358FFE;
    }

    @media (min-width: 768px) {
        padding-top: 79px;
    }
`;

    