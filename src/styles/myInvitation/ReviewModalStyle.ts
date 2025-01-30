import styled from 'styled-components';

export const ModalBG = styled.div`
    position: fixed;
    margin-top: 54px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; /* 퍼센트는 그대로 유지 */
    height: 100%; /* 퍼센트는 그대로 유지 */
    background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 350px;
    height: 468.5px;
    padding: 20px 20px 40px 20px;
    gap: 20px;
    background-color: var(--White);
    border-radius: 8px;
`;

export const DeleteContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    justify-content: flex-start;

`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font: var(--BoldContext);
    color: var(--Black);
    white-space: pre-line;

    .highlight {
    color: var(--Primary);
    }
`;