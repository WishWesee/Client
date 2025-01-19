import React, { useState } from 'react';
import AddIcon from "@/assets/icons/화면GUI_Line/2020/Add.svg?react";
import ImgIcon from "@/assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import HorizontalSB from "@/components/choiceCard/HorizontalSB";
import ReactNB from "@/components/top/Top_reactNB";
import Rectangle from "@/components/choiceCard/Rectangle";
import Wrap from "@/components/choiceCard/Wrap";
import NextButton from "@/components/button/Btn_Bottom_Next";
import { Top, WrapTexts, Modal, SB, ButtonNext, Button } from "@/constants/choiceCard/Wrap";
import * as style from '@/styles/choiceCard/ChoiceCardStyle';
import * as modalStyle from '@/styles/choiceCard/ModalStyle';
import useWMediaQuery from "@/hooks/useWMediaQuery";

const ChoiceCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeModal, setActiveModal] = useState(false);
  
  // 화면 크기를 감지하는 훅
  const { isDesktop, isTablet } = useWMediaQuery();

  const frontProp = isDesktop || isTablet ? "다음" : Top.NullFront;

  const handleToggle = (index: number) => {
    setActiveIndex(index); 
  };

  const renderModal = () => {
    setActiveModal(!activeModal); 
  };

  return (
    <>
      {activeModal && (
        <modalStyle.ModalBackground>
          <modalStyle.Modal>
            <modalStyle.Title>{Modal.Title}</modalStyle.Title>
            <NextButton text={ButtonNext.text} color={ButtonNext.color} onClick={renderModal} />
          </modalStyle.Modal>
        </modalStyle.ModalBackground>
      )}

      {/* 화면 크기에 따라 Front prop에 "다음" 또는 기존 값을 전달 */}
      <ReactNB Back={Top.Btn_rNB_Back} Front={frontProp} />

      <style.Content>
        <Wrap Title={WrapTexts.Title} SubText={WrapTexts.SubText} />
        <style.Wrap_Card>
          <style.HorizontalSB_Content>
            <style.Btn_hSB_New>
              <AddIcon />
              <ImgIcon />
            </style.Btn_hSB_New>
            <HorizontalSB
              Title={SB.All}
              Toggled={activeIndex === 0}
              onClick={() => handleToggle(0)}
            />
            <HorizontalSB
              Title={SB.MY}
              Toggled={activeIndex === 1}
              onClick={() => handleToggle(1)}
            />
            <HorizontalSB
              Title={SB.Birth}
              Toggled={activeIndex === 2}
              onClick={() => handleToggle(2)}
            />
            <HorizontalSB
              Title={SB.Trav}
              Toggled={activeIndex === 3}
              onClick={() => handleToggle(3)}
            />
            <HorizontalSB
              Title={SB.Year}
              Toggled={activeIndex === 4}
              onClick={() => handleToggle(4)}
            />
          </style.HorizontalSB_Content>
          <style.Img_Content_Card>
            <Rectangle />
            <Rectangle />
            <Rectangle />
            <Rectangle />
            <Rectangle />
            <Rectangle />
          </style.Img_Content_Card>
          <style.Bottom>
            <NextButton text={Button.text} color={Button.color} onClick={renderModal} />
          </style.Bottom>
        </style.Wrap_Card>
      </style.Content>
    </>
  );
};

export default ChoiceCard;
