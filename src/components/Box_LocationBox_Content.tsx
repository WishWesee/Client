//import React, { useState } from 'react';
import { constants } from '../constants/Comp_Box.ts';
import Search from '../assets/icons/화면GUI_Full/2424_Default/Finder.svg?react';
import '../styles/Comp_Box.css'

const Box_LocationBox_Content: React.FC = () => {

    //const [isToggled, setIsToggled] = useState(false);

    /**const handleClick = () => {
        setIsToggled(!isToggled);
    };*/

    return (
        <div
        className='LocationBox_Content'>
            <div
            className='LocationBox_Content_Title'>
                {constants.LocationBox_Content_Title}
            </div>
            <div
            className='LocationBox_Content_Field_LocBox_Free'>
                 <input 
                        type="text" 
                        placeholder={constants.LocationBox_Content_Field_LocBox_Free}
                        className="Search_Input" 
                    />
            </div>
            <div
            className='LocationBox_Content_Field_LocBox_Map'>
               <Search/>
               <input 
                        type="text" 
                        placeholder={constants.LocationBox_Content_Field_LocBox_Map}
                        className="Search_Input" 
                    />
            </div>
        </div>
    );
    };

export default Box_LocationBox_Content;
