import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    margin-top: 54px;
    margin-bottom: 20px;

    @media (min-width: 768px)  {
    gap: 60px;
    padding: 60px 40px 120px 40px; /*스크롤 없앨거면 120 조정하기*/
    width: auto;
    }

    @media (min-width: 1200px) {
    gap: 80px;
    padding: 80px 64px 160px 64px; /*스크롤 없앨거면 120 조정하기*/
    width: auto;
    }
`;

export const SlideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
    gap: 30px;
    }

    @media (min-width: 1200px) {
    gap: 40px;
    }
`;

