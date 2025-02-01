import React, { useState, useEffect } from "react";
import Wrap from "@/components/choiceCard/Wrap";
import ReviewModal from "@/components/myInvitation/ReviewModal";
import SlideBar from "@/components/myInvitation/SlideBar";
import { WrapTexts, MenuTitle } from "@/constants/myInvitation/MyInvitation";
import { fetchMyInvitations } from "@/api/myinvitation/myinvitationData"; 
import { reviewCheck } from "@/api/myinvitation/reviewCheck"; 
import * as style from "@/styles/myInvitation/MyInvitationPageStyle";

const MyInvitation: React.FC = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; image: string } | null>(null);

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

    const checkReview = async () => {
      try {
        const response = await reviewCheck();
        if (response.length > 0) {
          const title = response.title;
          const cardImage = response.cardImage;
          setModalContent({ title, image: cardImage });
          setIsModalOn(true);
        }
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    loadInvitations();
    checkReview();
  }, []);

  return (
    <>
      {isModalOn && modalContent && (
        <ReviewModal 
          targetWord={modalContent.title} 
          imageSrc={modalContent.image} 
          isModalOn={isModalOn} 
          onClose={() => setIsModalOn(false)} 
        />
      )}
      <style.Container>
        <Wrap
          Title={WrapTexts.Title}
          WrapBool={sentInvitation.length === 0 && receivedInvitation.length === 0}
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
