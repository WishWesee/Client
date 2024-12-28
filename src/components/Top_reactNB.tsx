//import React, { useState } from 'react';
import Arrow_Left from '../assets/icons/화면GUI_Line/2020/Arrow_Left.svg?react';
import { constants } from '../constants/Comp_Top.ts';
import '../styles/Comp_Top.css'

const ReactNB: React.FC = () => {

    //const [isToggled, setIsToggled] = useState(false);

    /**const handleClick = () => {
        setIsToggled(!isToggled);
    };*/

    return (
      <div
      className='Top_reactNB'>
          <div 
          className='Btn_rNB_Back' /**onClick={}*/> 
              <Arrow_Left/>
              {constants.Btn_rNB_Back}
          </div>

          <div
          className='Btn_rNB_Save' /**onClick={}*/>
              {constants.Btn_rNB_Save}
          </div>
      </div>
    );
  };

export default ReactNB;
