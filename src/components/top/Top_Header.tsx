import * as style from "@/styles/essentialComponents/top/TopHeaderStyle";
import HeaderLogo from "@assets/icons/Logo/HeaderLogo.svg?react";
import { FetchMyInfo } from "@/api/login/profile";
import SaveBox from "@assets/icons/화면GUI_Full/3232/SaveBox.svg?react";
import React, { useState, useEffect } from "react";

type HeaderProps = {
  profileBool: boolean;
};

type MyInfoType = {
  image: string;
};

const TopHeader: React.FC<HeaderProps> = ({ profileBool }) => {
  // const [profileVisible, setProfileVisible] = useState(profileBool);
  const [myInfo, setMyInfo] = useState<MyInfoType | null>(null);

  useEffect(() => {
      const loadInvitations = async () => {
        try {
          const data = await FetchMyInfo();
          setMyInfo(data);
          console.log("Fetched Data:", data); // 👉 데이터를 콘솔에 출력
        } catch (error) {
          console.error("Error fetching invitations:", error);
        }
      };

      loadInvitations();
    }, []);

  return (
    <style.TopHeader>
      <HeaderLogo className="item" />

      <style.HeaderButtonContainer>
        <SaveBox className="item" />
        {profileBool && myInfo ? <img style={{width: '28px', height: '28px', borderRadius: '50%'}} src={myInfo.image}/> : null}
      </style.HeaderButtonContainer>
    </style.TopHeader>
  );
};

export default TopHeader;
