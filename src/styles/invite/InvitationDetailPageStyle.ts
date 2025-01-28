import styled, { keyframes } from "styled-components";
import { isDesktop, isTablet } from "@/hooks/Media";

export const Container = styled.div`
  margin-top: 54px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--Grey5);
`;

export const BodyWrap = styled.div<{ $screenWidth: number }>`
  transition: all 0.3s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: ${(props) => props.$screenWidth * (262 / 350)}px;
  z-index: 1;

  ${isTablet} {
    margin-top: 0px;
  }

  ${isDesktop} {
    margin-top: 0px;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FadeInImage = styled.img<{
  $scrollY: number;
  $screenWidth: number;
}>`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${(props) => props.$screenWidth * (262 / 350)};
  aspect-ratio: 1;
  object-fit: cover;
  animation: ${fadeIn} 3s ease-out forwards;
  visibility: ${(props) =>
    props.$scrollY > props.$screenWidth * (262 / 350) ? "hidden" : "visible"};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2;
  pointer-events: none;
`;
