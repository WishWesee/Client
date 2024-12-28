//import React, { useState } from 'react';
import '../styles/Comp_Top.css'
import SlideButton from "./Btn_Boolean";
import Button_Bottom_Next from "./Btn_Bottom_Next";
import { constants } from '../constants/Comp_Bottom'
import '../styles/Comp_Bottom.css'

const Bottom: React.FC = () => {

    //const [isToggled, setIsToggled] = useState(false);

    /**const handleClick = () => {
        setIsToggled(!isToggled);
    };*/

    return (
        <div
        className='Bottom'>
            <div
            className='Boolean_Bottom_Come'>
                {constants.Btn_text}
                <SlideButton/>
            </div>
            <div
            className='button'>
            <Button_Bottom_Next text={constants.Btn_text_complete}/>
            </div>
        </div>
    );
    };

export default Bottom;
