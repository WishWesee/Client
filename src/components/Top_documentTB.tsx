import React, { useState } from 'react';
import ImgDefault from '../assets/icons/화면GUI_Full/2424_Default/Img.svg?react';
import ImgActivated from '../assets/icons/화면GUI_Full/2424_Activate/Img.svg?react';
import BoxDefault from '../assets/icons/화면GUI_Full/2424_Default/Box.svg?react';
import BoxActivated from '../assets/icons/화면GUI_Full/2424_Activate/Box.svg?react';
import TimetableDefault from '../assets/icons/화면GUI_Full/2424_Default/Timetable.svg?react';
import TimetableActivated from '../assets/icons/화면GUI_Full/2424_Activate/Timetable.svg?react';
import { constants } from '../constants/Comp_Top.ts';
import '../styles/Comp_Top.css'

const DocumentTB: React.FC = () => {

    const [isLineToggled, setIsLineToggled] = useState(false);
    const [isPhotoToggled, setIsPhotoToggled] = useState(false);
    const [isItemBoxToggled, setIsItemBoxToggled] = useState(false);
    const [isTimetableToggled, setIsTimetableToggled] = useState(false);

    const handleLineClick = () => {
        setIsLineToggled(!isLineToggled);
    };
    const handlePhotoClick = () => {
        setIsPhotoToggled(!isPhotoToggled);
    };
    const handleItemBoxClick = () => {
        setIsItemBoxToggled(!isItemBoxToggled);
    };
    const handleTimetableClick = () => {
        setIsTimetableToggled(!isTimetableToggled);
    };

    return (
      <div
      className='Top_documentTB'>
        <div
        className='Btn_dTB_Item_Text'>
            {constants.Btn_dTB_Item_Text}
        </div>
        <div
        className='Btn_dTB_Item_Line'
        onClick={handleLineClick}>
            <div
            className={`LineDiv ${isLineToggled ? 'Activated' : 'Default'}`}
            >
            </div>
        </div>
        <div
        className={`Btn_dTB_Item_Photo ${isPhotoToggled ? 'Activated' : 'Default'}`}
        onClick={handlePhotoClick}>
            {isPhotoToggled ? <ImgActivated /> : <ImgDefault />} 
            {constants.Btn_dTB_Item_Photo}
        </div> 
        <div
        className={`Btn_dTB_Item_Box ${isItemBoxToggled ? 'Activated' : 'Default'}`}
        onClick={handleItemBoxClick}>
            {isItemBoxToggled ? <BoxActivated /> : <BoxDefault />} 
            {constants.Btn_dTB_Item_Box}
        </div>
        <div
         className={`Btn_dTB_Item_Timetable ${isTimetableToggled ? 'Activated' : 'Default'}`}
         onClick={handleTimetableClick}>
            {isTimetableToggled ? <TimetableActivated/> : <TimetableDefault/>} 
            {constants.Btn_dTB_Item_Timetable}
        </div>
      </div>
    );
  };

export default DocumentTB;
