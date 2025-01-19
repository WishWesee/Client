import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
    gap: 0.75rem;
    padding: 3.75rem 1.25rem;
    width: 100%;
    height: 12.875rem;
    margin-top: 367px;

    @media (min-width: 768px)  {
        margin-top: calc( 100vh - 370px );
        padding: 0 1.25rem 0 1.25rem;
        height: auto;
    }

    @media (min-width: 1200px) {
        margin-top: calc( 100vh - 370px);
        padding: 0 1.25rem 0 1.25rem;
        height: auto;
    }
    `;

export const GoogleLoginButton = styled.div`
    display: flex;
    gap: 0.79625rem;
    align-items: center;
    justify-content: center;
    width: 87.18%;
    height: 3.5rem;
    box-sizing: border-box;
    padding: 1.25rem 0;
    border-radius: 0.5rem;
    background-color: #FCFCFD;
    border: 0.125rem solid #D7E9FF;
    color: #151516; 
    font-weight: 600;
    font-size: 1rem;
    line-height: 1rem;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    cursor: pointer;

        @media (min-width: 768px) {
        width: 340px;
        height: 56px;
    }
    `;

export const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-direction: row;
    color: #151516; 
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    `;

export const RegisterLink = styled.span`
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.125rem;
    text-align: center;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-underline-position: from-font;
    text-decoration-skip-ink: auto;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    cursor: pointer;
    `;

export const RegisterMessage = styled.div`
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.125rem;
        color: #151516;
    `;