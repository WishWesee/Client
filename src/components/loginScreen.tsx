//import React, { useState } from 'react';
import Mail from '../assets/icons/화면GUI_Full/2424_Activate/Invitation.svg?react';
import SaveBox from '../assets/icons/화면GUI_Full/2424_Activate/SaveBox.svg?react';
import Vote from '../assets/icons/화면GUI_Full/2424_Activate/vote.svg?react';
import Google from '../assets/icons/화면GUI_Full/3232/Google.svg?react';
import { FirstColumConstants, SecondColumConstants, greetingMessage, LogIn } from '../constants/loginScreen.ts';
import '../styles/loginScreen.css'
import TopHeader from './Top_Header.tsx';

const LoginScreen: React.FC = () => {

    //const [isToggled, setIsToggled] = useState(false);

    /**const handleClick = () => {
        setIsToggled(!isToggled);
    };*/

    const renderGreeting = (message: string) => {
        const targetWord = 'WishWesee';
        const lines = message.split('\n');

        return lines.map((line, index) => {
            if (line.includes(targetWord)) {
                const parts = line.split(targetWord);
                return (
                    <div key={index}>
                        {parts[0]}
                        <span className='highlight'>{targetWord}</span>
                        {parts[1]}
                    </div>
                );
            }
            return <div key={index}>{line}</div>;
        });
    };

    return (
        <div className='background'>
            <div className='headerComp'>
                <TopHeader profileBool={false}/>
                <div className='greetingMessage'>
                    <div>
                        {renderGreeting(greetingMessage.greetingMessage)}
                    </div>
                </div>
                <div className='logIn'>
                    <div className='googleLogIn'>
                        <Google/>
                        {LogIn.logIn}
                    </div>
                    <div className='register'>
                        <div className='registerMessage'>
                           {LogIn.registerMessage}
                        </div>
                        <div className='registerLink'>
                           {LogIn.register}
                        </div>
                    </div>
            </div>
            </div>
            <div className='columns'>
                <div className='firstColumn'>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                    <div className='rectangle'>
                        <div className='txt_Feature'>
                            <div className='titleTxt'>
                                {FirstColumConstants.txt_Feature}
                            </div>
                            <div className='subTxt'>
                                {FirstColumConstants.txt_Feature_Sub}
                            </div>
                        </div>
                        <div className='img_Box'>
                            <Mail width={45} height={45}/>
                        </div>
                    </div>
                    <div className='rectangle'>
                        <div className='txt_Feature'>
                                <div className='titleTxt'>
                                    {FirstColumConstants.txt_Feature2}
                                </div>
                                <div className='subTxt'>
                                    {FirstColumConstants.txt_Feature_Sub2}
                                </div>
                            </div>
                            <div className='img_Box'>
                                <SaveBox width={45} height={45}/>
                            </div>
                    </div>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                </div>

                <div className='secondColumn'>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                    <div className='rectangle'>
                        <div className='txt_Feature'>
                                    <div className='titleTxt'>
                                        {SecondColumConstants.txt_Feature}
                                    </div>
                                    <div className='subTxt'>
                                        {SecondColumConstants.txt_Feature_Sub}
                                    </div>
                                </div>
                                <div className='img_Box'>
                                    <Vote width={46.59} height={45}/>
                                </div>
                    </div>
                    <div className='rectangle'></div>
                    <div className='rectangle'></div>
                </div>
            </div>
        </div>
    );
  };

export default LoginScreen;
