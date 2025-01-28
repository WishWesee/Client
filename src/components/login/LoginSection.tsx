import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from '@/constants/login/loginScreen';
import * as Style from '@/styles/login/LoginSectionComponentStyle';
import Google from '@/assets/icons/화면GUI_Full/3232/Google.svg?react';

const LoginSection: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // URL에서 토큰 추출
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            // 로컬 스토리지에 토큰 저장
            localStorage.setItem('authToken', token);

            // 메인 페이지로 리다이렉트
            navigate('/');
        }
    }, [navigate]);

    const handleGoogleLogin = () => {
        // Google 로그인 페이지로 리다이렉트
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
