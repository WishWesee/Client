import React from 'react';
import { LogIn } from '@constants/loginScreen'
import * as Style from '@styles/loginScreen/LoginSectionComponentStyle';
import Google from '../assets/icons/화면GUI_Full/3232/Google.svg?react';

const LoginSection: React.FC = () => (
    <Style.LoginContainer>
        <Style.GoogleLoginButton>
            <Google />
            {LogIn.logIn}
        </Style.GoogleLoginButton>
        <Style.RegisterContainer>
            <Style.RegisterMessage>{LogIn.registerMessage}</Style.RegisterMessage>
            <Style.RegisterLink>{LogIn.register}</Style.RegisterLink>
        </Style.RegisterContainer>
    </Style.LoginContainer>
);

export default LoginSection;
