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
  const [activeRectangle, setActiveRectangle] = useState<number>(0);
  const [activeModal, setActiveModal] = useState(false);

  // 화면 크기를 감지하는 훅
  const { isDesktop, isTablet } = useWMediaQuery();

  const frontProp = isDesktop || isTablet ? "다음" : Top.NullFront;

  const handleSBToggle = (index: number) => {
    setActiveIndex(index);
  };

  const handleRectangleToggle = (index: number) => {
    setActiveRectangle(index);
  };

  const renderModal = () => {
    setActiveModal(!activeModal);
  };

  // HorizontalSB 항목 데이터
  const sbItems = [
    { title: SB.All },
    { title: SB.MY },
    { title: SB.Birth },
    { title: SB.Trav },
    { title: SB.Year },
  ];

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
            <style.Btn_hSB_New onClick={renderModal}>
              <AddIcon />
              <ImgIcon />
            </style.Btn_hSB_New>
            {/* HorizontalSB를 map으로 렌더링 */}
            {sbItems.map((item, index) => (
              <HorizontalSB
                key={index}
                Title={item.title}
                Toggled={activeIndex === index}
                onClick={() => handleSBToggle(index)}
              />
            ))}
          </style.HorizontalSB_Content>
          <style.Img_Content_Card>
            {Array.from({ length: 6 }).map((_, index) => (
                <Rectangle key={index} toggled={activeRectangle === index} onClick={() => handleRectangleToggle(index)} />
              ))}
          </style.Img_Content_Card>
          <style.Bottom>
            <NextButton text={Button.text} color={Button.color} />
          </style.Bottom>
        </style.Wrap_Card>
      </style.Content>
    </>
  );
};

export default ChoiceCard;
