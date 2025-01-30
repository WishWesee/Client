import styled from 'styled-components';

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    @media (min-width: 768px) {
        margin-top: 54px;
        width: auto;
    }
`;