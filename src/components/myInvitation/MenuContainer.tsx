import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LetterContainer from "@/components/myInvitation/LetterContainer";
import ArrowRight from "@/assets/icons/화면GUI_Line/2828/Arrow_Right.tsx";
import * as style from "@/styles/myInvitation/MenuContainerStyle";
import { MenuSubText } from "@constants/myInvitation/MyInvitation";
import { TInviteListResItem } from "@/types/invite";

type NBProps = {
  MenuTitle: string;
  Data: TInviteListResItem[];
  MenuSub?: string;
  ShowDetailBool?: boolean;
};

//API 연동할때는 초대장 받은게 없으면 ~하는 로직으로 바꿀것.
const SlideBar: React.FC<NBProps> = ({
  MenuTitle,
  MenuSub,
  ShowDetailBool,
  Data,
}) => {
  const navigate = useNavigate();
  const [NoInvitationText, setNoInvitationText] =
    useState("저장된 초대장이 없어요");

  useEffect(() => {
    if (Data.length === 0) {
      if (MenuTitle === "작성 중인 초대장") {
        setNoInvitationText("저장된 초대장이 없어요");
      } else if (MenuTitle === "내가 보낸 초대장") {
        setNoInvitationText("아직 보낸 초대장이 없어요");
      } else {
        setNoInvitationText("아직 받은 초대장이 없어요");
      }
    }
  }, [Data, MenuTitle]);

  const handleNavigate = () => {
    if (MenuTitle === "내가 받은 초대장") {
      navigate("/invites/received");
    } else if (MenuTitle === "내가 보낸 초대장") {
      navigate("/invites/sent");
    }
  };

  return (
    <>
      {ShowDetailBool ? (
        <style.MenuContainerWithArrow>
          <style.MenuTitleBox>{MenuTitle}</style.MenuTitleBox>
          {Data.length == 0 ? (
            <ArrowRight stroke="#88898A" />
          ) : (
            <ArrowRight onClick={handleNavigate} />
          )}
        </style.MenuContainerWithArrow>
      ) : (
        <style.MenuContainer>
          <style.MenuTitleBox>{MenuTitle}</style.MenuTitleBox>
          {MenuSub ? (
            <style.MenuSubBox>
              {MenuSub}
              {MenuSubText.number}
            </style.MenuSubBox>
          ) : null}
        </style.MenuContainer>
      )}

      {Data.length == 0 ? (
        <style.NoInvitationText>{NoInvitationText}</style.NoInvitationText>
      ) : (
        <style.SlideBar>
          {Data.map((invitation) => (
            <LetterContainer
              key={invitation.invitationId}
              Title={invitation.title}
              Date={invitation.date.split("T")[0]}
              Image={invitation.cardImage}
              token={invitation.invitationToken || ""}
            />
          ))}
        </style.SlideBar>
      )}
    </>
  );
};

export default SlideBar;
