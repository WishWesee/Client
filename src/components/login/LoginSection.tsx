import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '@/constants/login/loginScreen';
import * as Style from '@/styles/login/LoginSectionComponentStyle';
import Google from '@/assets/icons/화면GUI_Full/3232/Google.svg?react';

const LoginSection: React.FC = () => {
    const navigate = useNavigate();
    //토큰갱신 및 구글로그인 후 이동할 페이지 서버에서 세팅해주면 바꾸기
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            localStorage.setItem('authToken', token);
            navigate('/');
        }
    }, [navigate]);

    const handleGoogleLogin = () => {
        window.location.href = 'https://wishwesee.n-e.kr/oauth2/authorize/google';
    };

    return (
        <Style.LoginContainer>
            <Style.GoogleLoginButton onClick={handleGoogleLogin}>
                <Google />
                {LogIn.logIn}
            </Style.GoogleLoginButton>
            <Style.RegisterContainer>
                <Style.RegisterMessage>{LogIn.registerMessage}</Style.RegisterMessage>
                <Style.RegisterLink onClick={handleGoogleLogin}>{LogIn.register}</Style.RegisterLink>
            </Style.RegisterContainer>
        </Style.LoginContainer>
    );
};

export default LoginSection;
