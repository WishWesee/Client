import React, { useState, useEffect } from 'react';
import Wrap from '@/components/choiceCard/Wrap';
import ReviewModal from '@/components/myInvitation/ReviewModal';
import SlideBar from '@/components/myInvitation/SlideBar';
import { WrapTexts, MenuTitle } from '@/constants/myInvitation/MyInvitation';
import * as style from '@/styles/myInvitation/MyInvitationPageStyle';

const MyInvitation: React.FC = () => {
  // 모달 상태를 부모에서 관리
  const [isModalOn, setIsModalOn] = useState(true);
  const [draftCount, setDraftCount] = useState<string | null>(null);
  const [draftingInvitation, setDraftingInvitation] = useState([]);
  const [sentInvitation, setSentInvitation] = useState([]);
  const [receivedInvitation, setReceivedInvitation] = useState([]);

  useEffect(() => {
    const fetchDraftCount = async () => {
      try {
        const response = await fetch('https://wishwesee.n-e.kr/api/v1/invitation/my-invitations', {
          method: 'GET',
          headers: {
            //token 어떻게 저장할지 정해서 여기 다시 넣기
            'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJraGhtMzc4N0BnbWFpbC5jb20iLCJpYXQiOjE3Mzc5NzMwMTksImV4cCI6MTczNzk4MDIxOX0.zh0SUiqv5bR92akDAXW9j2qz28O-80dFxWWcbW9IbSY9BMDQZU2UKOlNxPaBQ4wAaVziRBgCbN4t_8MX_dXyHA`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setDraftCount(data.draftCount?.toString() || '0'); 
        setReceivedInvitation(data.receivedInvitations || []);
        setDraftingInvitation(data.draftingInvitations || []);
        setSentInvitation(data.sentInvitations || []);
        console.log(sentInvitation);
      } catch (error) {
        console.error('Error fetching draft count:', error);
        setDraftCount('0');
      }
    };

    fetchDraftCount();
  }, []);

  return (
    <>
      <ReviewModal isModalOn={isModalOn} onClose={() => setIsModalOn(false)} />
      <style.Container>
        <Wrap Title={WrapTexts.Title} WrapBool={true} SubText={sentInvitation?.length == 0 && receivedInvitation?.length == 0 ? WrapTexts.NoSubText : WrapTexts.SubText} />
        <style.SlideBarContainer>
          <SlideBar MenuTitle={MenuTitle.Writing} MenuSub={draftCount || 'n'} Data={draftingInvitation}/>
          <SlideBar MenuTitle={MenuTitle.Send} ShowDetailBool={true} Data={sentInvitation}/>
          <SlideBar MenuTitle={MenuTitle.Recieve} ShowDetailBool={true} Data={receivedInvitation}/>
        </style.SlideBarContainer>
      </style.Container>
    </>
  );
};

export default MyInvitation;
