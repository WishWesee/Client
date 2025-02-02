import React from 'react';
//import axios from "axios";
import { LogIn } from '@/constants/login/loginScreen'
import * as Style from '@/styles/login/LoginSectionComponentStyle';
import Google from '@/assets/icons/화면GUI_Full/3232/Google.svg?react';

const GoogleLogin: React.FC = () => {

    const handleGoogleLogin = () => {
        window.location.href = 'https://wishwesee.n-e.kr/oauth2/authorize/google';
    };
    
    return (
    <>
        <Style.GoogleLoginButton onClick={handleGoogleLogin}>
            <Google />
            {LogIn.logIn}
        </Style.GoogleLoginButton>
    </>
    )
};

export default GoogleLogin;