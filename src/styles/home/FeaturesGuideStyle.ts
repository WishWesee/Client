import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  gap: 75px;
  background-color: var(--Blue10);

  ${isTablet} {
    gap: 67px;
  }

  ${isDesktop} {
    gap: 67px;
  }
`;

export const MainText = styled.h3`
  transition: all 0.3s ease-in-out;
  font: var(--TitleText);
  color: var(--Primary);
  text-align: center;
`;

export const FeaturesWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 75px;

  ${isTablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 47px 20px;
  }

  ${isDesktop} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const FeatureBox = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
  position: relative;
  width: 340px;
  height: 160px;
  border-radius: 8px;
  background-color: var(--White);
  box-shadow: 0px 0px 8px #a8ceff;

  ${isTablet} {
    height: 168px;
    gap: 20px;
  }

  ${isDesktop} {
    height: 168px;
    gap: 20px;
  }

  svg {
    position: absolute;
    top: 0;
    margin-top: -27px;
  }

  p {
    font: var(--RegularContext);
    color: var(--Black);
    white-space: pre-line;
  }
`;
