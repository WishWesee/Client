import ImgIcon from "@/assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import AddIcon from "@/assets/icons/화면GUI_Line/2020/Add.svg?react";
import Birthday1 from "@/assets/images/ChoiceCard/Birthday1.svg";
import Birthday2 from "@/assets/images/ChoiceCard/Birthday2.svg";
import LastOfYear1 from "@/assets/images/ChoiceCard/LastOfYear1.svg";
import LastOfYear2 from "@/assets/images/ChoiceCard/LastOfYear2.svg";
import Travel1 from "@/assets/images/ChoiceCard/travel1.svg";
import NextButton from "@/components/button/Btn_Bottom_Next";
import HorizontalSB from "@/components/choiceCard/HorizontalSB";
import Rectangle from "@/components/choiceCard/Rectangle";
import Wrap from "@/components/choiceCard/Wrap";
import ReactNB from "@/components/top/Top_reactNB";
import { useChoiceStore } from "@/store/useChoiceStore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  ButtonNext,
  Modal,
  SB,
  Top,
  WrapTexts,
} from "@/constants/choiceCard/Wrap";
import useWMediaQuery from "@/hooks/useWMediaQuery";
import useInvitationStore from "@/store/invitation";
import * as style from "@/styles/choiceCard/ChoiceCardStyle";
import * as modalStyle from "@/styles/choiceCard/ModalStyle";

const ChoiceCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeRectangle, setActiveRectangle] = useState<number>(0);
  const [activeModal, setActiveModal] = useState(false);
  const [myImages, setMyImages] = useState<string[]>([]);
  const navigate = useNavigate();

  const { /**selectedImage, */ setSelectedImage } = useChoiceStore(); //이미지 src 전역상태 설정
  const { setCardImage } = useInvitationStore();

  const { isDesktop, isTablet } = useWMediaQuery();

  const frontProp = isDesktop || isTablet ? "다음" : Top.NullFront;

  const handleSBToggle = (index: number) => {
    setActiveIndex(index); // 선택한 HorizontalSB의 index를 저장
  };

  const handleRectangleToggle = (index: number, imageSrc: string) => {
    setActiveRectangle(index);
    setSelectedImage(imageSrc);
    setCardImage(imageSrc);
  };

  const renderModal = () => {
    setActiveModal(!activeModal);
  };

  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("myImages") || "[]");
    setMyImages(savedImages);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setSelectedImage(reader.result as string); // Base64 URL로 이미지 저장
          setCardImage(reader.result as string);
          navigate("/contentcut", { state: { image: reader.result } });
        }
      };

      reader.readAsDataURL(file); // 이미지 파일 읽기
    }
  };

  // HorizontalSB 항목 데이터
  const sbItems = [
    { title: SB.All },
    { title: SB.MY },
    { title: SB.Birth },
    { title: SB.Trav },
    { title: SB.Year },
  ];

  // cards 데이터
  const cards = [
    ...myImages.map((image) => ({ content: image, category: SB.MY })),
    { content: Birthday1, category: SB.Birth },
    { content: Birthday2, category: SB.Birth },
    { content: LastOfYear1, category: SB.Year },
    { content: LastOfYear2, category: SB.Year },
    { content: Travel1, category: SB.Trav },
  ];

  const filteredCards =
    activeIndex === 0
      ? cards // 'All'이면 전체를 보여줌
      : cards.filter((card) => card.category === sbItems[activeIndex].title);

  return (
    <>
      {activeModal && (
        <modalStyle.ModalBackground>
          <modalStyle.Modal>
            <modalStyle.Title>{Modal.Title}</modalStyle.Title>
            <NextButton
              text={ButtonNext.text}
              color={ButtonNext.color}
              onClick={renderModal}
            />
          </modalStyle.Modal>
        </modalStyle.ModalBackground>
      )}

      {/* 화면 크기에 따라 Front prop에 "다음" 또는 기존 값을 전달 */}
      <ReactNB
        Back={Top.Btn_rNB_Back}
        Front={frontProp}
        onBackClick={() => navigate("/")}
      />

      <style.Content>
        <Wrap Title={WrapTexts.Title} SubText={WrapTexts.SubText} />
        <style.Wrap_Card>
          <style.HorizontalSB_Content>
            <style.Btn_hSB_New as="label">
              <AddIcon />
              <ImgIcon />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </style.Btn_hSB_New>
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
            {filteredCards.map((item, index) => (
              <Rectangle
                key={index}
                toggled={activeRectangle === index}
                onClick={() => handleRectangleToggle(index, item.content)}
              >
                <style.ImgCard src={item.content} alt={`card-${index}`} />
              </Rectangle>
            ))}
          </style.Img_Content_Card>
          <style.Bottom>
            <NextButton
              text={Button.text}
              color={Button.color}
              onClick={() => navigate("/write")}
            />
          </style.Bottom>
        </style.Wrap_Card>
      </style.Content>
    </>
  );
};

export default ChoiceCard;
