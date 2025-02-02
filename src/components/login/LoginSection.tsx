import React from "react";
import { LogIn } from "@/constants/login/loginScreen";
import * as Style from "@/styles/login/LoginSectionComponentStyle";
import GoogleLogin from "@/components/login/GoogleLogin";

const LoginSection: React.FC = () => {
  //토큰갱신 및 구글로그인 후 이동할 페이지 서버에서 세팅해주면 바꾸기
  const handleGoogleLogin = () => {
    window.location.href = "https://wishwesee.n-e.kr/oauth2/authorize/google";
  };

  return (
    <Style.LoginContainer>
      <GoogleLogin />
      <Style.RegisterContainer>
        <Style.RegisterMessage>{LogIn.registerMessage}</Style.RegisterMessage>
        <Style.RegisterLink onClick={handleGoogleLogin}>
          {LogIn.register}
        </Style.RegisterLink>
      </Style.RegisterContainer>
    </Style.LoginContainer>
  );
};

export default LoginSection;
