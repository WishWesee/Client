import React, { useState } from 'react';
import HeaderLogo from '@assets/icons/Logo/HeaderLogo.svg?react';
import Profile from '@assets/icons/화면GUI_Full/3232/Profile.svg?react';
import SaveBox from '@assets/icons/화면GUI_Full/3232/SaveBox.svg?react';
import * as style from '@/styles/essentialComponents/top/TopHeaderStyle';

type HeaderProps = {
  profileBool: boolean;
};

const TopHeader: React.FC<HeaderProps> = ({ profileBool }) => {
  const [profileVisible, setProfileVisible] = useState(profileBool);

  return (
    <style.TopHeader>
      <style.HeaderLogoContainer>
        <HeaderLogo className="item" />
      </style.HeaderLogoContainer>

      <style.HeaderButtonContainer>
        <SaveBox className="item" />
        {profileVisible ? <Profile className="item" /> : null}
      </style.HeaderButtonContainer>
    </style.TopHeader>
  );
};

export default TopHeader;
