import ButtonBottomNext from "@/components/button/Btn_Bottom_Next";
import LogoEnglish from "@assets/images/28060/Logo_English.svg?react";
import LogoKorean from "@assets/images/18060/Logo_Korean.svg?react";
import ImgLoading2 from "@assets/images/Loading/Loading2.svg?react";
import BGMail from "@assets/images/Home/BGMail.svg?react";
import ImgIntroBG from "@assets/images/Home/ImgIntroBG.svg?react";
import * as S from "@styles/home/HomeLoginStyle";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import { useNavigate } from "react-router-dom";

const HomeLogin = () => {
  const { isMobile } = useWMediaQuery();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.HomeWrap>
        <S.LogoWrap>
          {!isMobile && <ImgLoading2 />}
          <LogoEnglish />
          <LogoKorean />
        </S.LogoWrap>
        {isMobile && <ImgIntroBG style={{ position: "absolute", top: 118 }} />}
        <S.MailBoxWrap>
          <BGMail />
          <S.MailTopWrap>
            <S.TextWrap>
              <S.BlackText>
                일상 속 다양한 만남은
                <br />
                <S.BlueText>초대</S.BlueText>부터 시작합니다.
              </S.BlackText>
              <S.BlackText>
                특별한 순간으로 소중한 사람들을
                <br />
                초대하는 건 어떠신가요?
              </S.BlackText>
              <S.BlueText>우리만의 특별한 초대장을 만들어보세요!</S.BlueText>
            </S.TextWrap>
            <ButtonBottomNext
              text={"초대장 만들기"}
              color={"blue"}
              onClick={() => navigate("/write")}
            />
          </S.MailTopWrap>
        </S.MailBoxWrap>
      </S.HomeWrap>
      <S.BackgroundColor />
    </S.Container>
  );
};

export default HomeLogin;
