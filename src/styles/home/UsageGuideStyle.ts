import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
  gap: 48px;
  background-color: var(--White);

  ${isTablet} {
    gap: 40px;
  }

  ${isDesktop} {
    gap: 40px;
  }
`;

export const MainText = styled.h3`
  transition: all 0.3s ease-in-out;
  font: var(--TitleText);
  color: var(--Black);
  text-align: center;
`;

export const CardWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${isTablet} {
    flex-direction: row;
    gap: 16px;
  }

  ${isDesktop} {
    flex-direction: row;
    gap: 20px;
  }
`;

export const LeftWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${isTablet} {
    gap: 16px;
  }

  ${isDesktop} {
    gap: 20px;
  }
`;

export const UsageCard = styled.div<{
  $color: string;
  $isSecond: boolean;
  $isThird: boolean;
}>`
  transition: all 0.3s ease-in-out;
  display: flex;
  position: relative;
  width: 340px;
  height: ${(props) => (props.$isThird ? 336 : 160)}px;
  border-radius: 8px;
  background-color: ${(props) => props.$color};

  ${isTablet} {
    width: 336px;
  }

  ${isDesktop} {
    width: 520px;
    height: ${(props) => (props.$isThird ? 520 : 250)}px;
  }

  img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    width: ${(props) => (props.$isSecond ? 50 : props.$isThird ? 78 : 100)}%;

    ${isDesktop} {
      width: ${(props) => (props.$isSecond ? 60 : props.$isThird ? 83 : 100)}%;
    }
  }
`;

export const NumBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  max-height: 24px;
  border-radius: 100px;
  background-color: var(--Primary);
  color: var(--White);
  font: var(--FeatureBodyText);
  margin: 16px 8px 0 16px;

  ${isDesktop} {
    margin: 20px 12px 0 20px;
  }
`;

export const ContentText = styled.p<{ $isSecond: boolean }>`
  font: var(--FeatureBodyText);
  color: var(--Black);
  white-space: pre-line;
  margin-top: ${(props) => (props.$isSecond ? 16 : 19)}px;

  span {
    color: var(--Primary);
  }

  ${isDesktop} {
    margin-top: 23px;
    white-space: normal;
  }
`;
