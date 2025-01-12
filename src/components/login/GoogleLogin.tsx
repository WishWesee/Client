import React from 'react';
import { LogIn } from '@/constants/login/loginScreen'
import * as Style from '@/styles/login/LoginSectionComponentStyle';
import Google from '@/assets/icons/화면GUI_Full/3232/Google.svg?react';

const GoogleLogin: React.FC = () => (
    <>
        <Style.GoogleLoginButton>
            <Google />
            {LogIn.logIn}
        </Style.GoogleLoginButton>
    </>
);

export default GoogleLogin;