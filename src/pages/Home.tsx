import ButtonBottomNext from "@/components/button/Btn_Bottom_Next";
import LogoEnglish from "@assets/images/28060/Logo_English.svg?react";
import LogoKorean from "@assets/images/18060/Logo_Korean.svg?react";
import ImgLoading2 from "@assets/images/Loading/Loading2.svg?react";
import BGMail from "@assets/images/Home/BGMail.svg?react";
import ImgIntroBG from "@assets/images/Home/ImgIntroBG.svg?react";
import styled from "styled-components";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { isDesktop, isTablet } from "@/hooks/Media";

const Home = () => {
  const { isMobile } = useWMediaQuery();

  return (
    <Container>
      <HomeWrap>
        <LogoWrap>
          {!isMobile && <ImgLoading2 />}
          <LogoEnglish />
          <LogoKorean />
        </LogoWrap>
        {isMobile && <ImgIntroBG style={{ position: "absolute", top: 118 }} />}
        <MailBoxWrap>
          <BGMail />
          <MailTopWrap>
            <TextWrap>
              <BlackText>
                일상 속 다양한 만남은
                <br />
                <BlueText>초대</BlueText>부터 시작합니다.
              </BlackText>
              <BlackText>
                특별한 순간으로 소중한 사람들을
                <br />
                초대하는 건 어떠신가요?
              </BlackText>
              <BlueText>우리만의 특별한 초대장을 만들어보세요!</BlueText>
            </TextWrap>
            <ButtonBottomNext text={"초대장 만들기"} color={"blue"} />
          </MailTopWrap>
        </MailBoxWrap>
      </HomeWrap>
      <BackgroundColor />
    </Container>
  );
};

export default Home;

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

  ${isTablet} {
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
  }

  ${isDesktop} {
    margin-top: 0px;
    padding-top: 40px;
    padding-bottom: 40px;
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
  }

  ${isDesktop} {
    margin-top: 0px;
    padding-top: 40px;
    padding-bottom: 40px;
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
    margin-top: 120px;
  }

  ${isDesktop} {
    margin-top: 160px;
  }
`;
