import styled from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  position: relative;
`;

export const BackgroundColor = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  background: linear-gradient(
    180deg,
    #fcfcfd 0%,
    rgba(215, 233, 255, 0.5) 100%
  );
  width: 100%;
  min-height: 100%;
  height: 100vh;
`;

export const HomeWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 54px;

  ${isDesktop} {
    flex-direction: row;
    justify-content: center;
    gap: 120px;
    padding-top: 180px;
    padding-bottom: 180px;
  }
`;

export const LogoWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 124px;
  z-index: 2;

  ${isTablet} {
    margin-top: 0px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  ${isDesktop} {
    margin-top: 0px;
  }
`;

export const TextWrap = styled.div`
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  margin-bottom: 32px;
`;

export const BlueText = styled.span`
  transition: all 0.3s ease-in-out;
  font: var(--BoldContext);
  color: var(--Primary);
`;

export const BlackText = styled.p`
  transition: all 0.3s ease-in-out;
  font: var(--RegularContext);
  color: var(--Black);
`;

export const MailBoxWrap = styled.div`
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-top: -60px;
  z-index: 1;

  ${isTablet} {
    margin-top: 0px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  ${isDesktop} {
    margin-top: 0px;
  }

  svg {
    display: block;
  }
`;

export const MailTopWrap = styled.div`
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${isTablet} {
    margin-top: 160px;
  }

  ${isDesktop} {
    margin-top: 120px;
  }
`;
