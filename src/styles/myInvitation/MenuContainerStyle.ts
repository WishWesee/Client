import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const MenuContainerWithArrow = styled.div`
    display: flex;
    gap: calc( 100vw - 198.5px );
    align-items: center;

    @media (min-width: 768px) {
    gap: calc( 100vw - 300.5px );
    }

    @media (min-width: 1200px) {
    gap: calc( 100vw - 350.5px );
    }
`;

export const MenuTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font: var(--PageName);
    color: var(--Black);
`;

export const MenuSubBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font: var(--RegularContext);
    color: var(--Black);
`;

export const SlideBar = styled.div`
    display: flex;
    box-sizing: border-box;
    gap: 12px;
    overflow-x: auto;
    white-space: nowrap; /* 요소들이 줄바꿈되지 않도록 설정 */
`;