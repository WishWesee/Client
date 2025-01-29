import React, { useState, useEffect } from "react";
import Wrap from "@/components/choiceCard/Wrap";
import ReviewModal from "@/components/myInvitation/ReviewModal";
import SlideBar from "@/components/myInvitation/SlideBar";
import { WrapTexts, MenuTitle } from "@/constants/myInvitation/MyInvitation";
import { fetchMyInvitations } from "@/api/myinvitation/myinvitationData"; 
import * as style from "@/styles/myInvitation/MyInvitationPageStyle";

const MyInvitation: React.FC = () => {
  const [isModalOn, setIsModalOn] = useState(true);
  const [draftCount, setDraftCount] = useState<string | null>(null);
  const [draftingInvitation, setDraftingInvitation] = useState([]);
  const [sentInvitation, setSentInvitation] = useState([]);
  const [receivedInvitation, setReceivedInvitation] = useState([]);

  useEffect(() => {
    const loadInvitations = async () => {
      try {
        const data = await fetchMyInvitations();

        setDraftCount(data.draftCount?.toString() || "0");
        setReceivedInvitation(data.receivedInvitations || []);
        setDraftingInvitation(data.draftingInvitations || []);
        setSentInvitation(data.sentInvitations || []);
      } catch (error) {
        console.error("Error fetching invitations:", error);
        setDraftCount("0");
      }
    };

    loadInvitations();
  }, []);

  return (
    <>
      <ReviewModal isModalOn={isModalOn} onClose={() => setIsModalOn(false)} />
      <style.Container>
        <Wrap
          Title={WrapTexts.Title}
          WrapBool={true}
          SubText={
            sentInvitation.length === 0 && receivedInvitation.length === 0
              ? WrapTexts.NoSubText
              : WrapTexts.SubText
          }
        />
        <style.SlideBarContainer>
          <SlideBar MenuTitle={MenuTitle.Writing} MenuSub={draftCount || "n"} Data={draftingInvitation} />
          <SlideBar MenuTitle={MenuTitle.Send} ShowDetailBool={true} Data={sentInvitation} />
          <SlideBar MenuTitle={MenuTitle.Recieve} ShowDetailBool={true} Data={receivedInvitation} />
        </style.SlideBarContainer>
      </style.Container>
    </>
  );
};

export default MyInvitation;
