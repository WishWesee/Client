//import React, { useState } from 'react';
import HeaderLogo from '../assets/icons/Logo/HeaderLogo.svg?react';
import Profile from '../assets/icons/화면GUI_Full/3232/Profile.svg?react';
import SaveBox from '../assets/icons/화면GUI_Full/3232/SaveBox.svg?react';
import '../styles/Comp_Top.css'

const TopHeader: React.FC = () => {

    //const [isToggled, setIsToggled] = useState(false);

    /**const handleClick = () => {
        setIsToggled(!isToggled);
    };*/

    return (
        <div
        className='Top_Header'>
            <div
            className='Header_LogoContainer'>
                <HeaderLogo className='item'/>
            </div>

            <div
            className='Header_ButtonContainer'>
                <SaveBox className='item'/**onClick={}*//>
                <Profile className='item'/**onClick={}*//>
            </div>
        </div>
    );
    };

export default TopHeader;
