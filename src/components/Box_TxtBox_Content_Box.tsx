//import React, { useState } from 'react';
import { constants } from '../constants/Comp_Box.ts';
import '../styles/Comp_Box.css'

const TxtBox_Content_Box: React.FC = () => {

    //const [isToggled, setIsToggled] = useState(false);

    /**const handleClick = () => {
        setIsToggled(!isToggled);
    };*/

    return (
        <div
        className='TxtBox_Content_Box'>
            <div
            className='Content_Box_Title'>
                <input 
                        type="text" 
                        placeholder={constants.Content_Box_Title}
                        className="Input_Title" 
                    />
            </div>
            <div
            className='Content_Box_Line'>
            </div>
            <div
            className='Content_Box_Info'>
                  <input 
                        type="text" 
                        placeholder={constants.Content_Box_Info}
                        className="Input_Info" 
                    />
            </div>
        </div>
    );
    };

export default TxtBox_Content_Box;
