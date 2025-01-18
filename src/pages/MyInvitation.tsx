import React, { useState } from 'react';
import Wrap from '@/components/choiceCard/Wrap';
import ReviewModal from '@/components/myInvitation/ReviewModal';
import SlideBar from '@/components/myInvitation/SlideBar';
import { WrapTexts, MenuTitle } from '@/constants/myInvitation/MyInvitation';
import * as style from '@/styles/myInvitation/MyInvitationPageStyle';

const MyInviation: React.FC = () => {
  // 모달 상태를 부모에서 관리
  const [isModalOn, setIsModalOn] = useState(true);

  return (
    <>
    {/* isModalOn 값에 따라 ReviewModal을 렌더링하며, onClose 콜백을 전달 */}
    <ReviewModal isModalOn={isModalOn} onClose={() => setIsModalOn(false)} />
    <style.Container>
      <Wrap Title={WrapTexts.Title} SubText={WrapTexts.SubText} />
      <style.SlideBarContainer>
        <SlideBar MenuTitle={MenuTitle.Writing} MenuSub="n" />
        <SlideBar MenuTitle={MenuTitle.Send} ShowDetailBool={true} />
        <SlideBar MenuTitle={MenuTitle.Recieve} ShowDetailBool={true} />
      </style.SlideBarContainer>
    </style.Container>
    </>
  );
};

export default MyInviation;
