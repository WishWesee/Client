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
  const [myImages, setMyImages] = useState<File[]>([]); // File 배열로 변경
  const navigate = useNavigate();

  const { selectedImage, setSelectedImage } = useChoiceStore(); // 전역 상태 업데이트
  const { setCardImage } = useInvitationStore();

  const { isDesktop, isTablet } = useWMediaQuery();

  const frontProp = isDesktop || isTablet ? "다음" : Top.NullFront;

  const handleSBToggle = (index: number) => {
    setActiveIndex(index);
  };

  const handleRectangleToggle = async (
    index: number,
    imageUrl: string | File
  ) => {
    try {
      if (typeof imageUrl === "string") {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "image.svg", { type: "image/svg+xml" });
        setSelectedImage(file);
        setCardImage(file);
      } else {
        setSelectedImage(imageUrl);
        setCardImage(imageUrl);
      }
      setActiveRectangle(index);
    } catch (error) {
      console.error("파일 변환 오류:", error);
    }
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
          setSelectedImage(file); // File 객체를 전역 상태에 저장
          setCardImage(file); // Base64 URL로 이미지 저장
          navigate("/contentcut", { state: { image: reader.result } });
        }
      };

      reader.readAsDataURL(file);
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
      ? cards
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

      <ReactNB
        Back={Top.Btn_rNB_Back}
        Front={frontProp}
        onBackClick={() => navigate("/")}
        onFrontClick={() => navigate("/write")}
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
            {filteredCards.map((item, index) => {
              const imageSrc =
                item.content instanceof File
                  ? URL.createObjectURL(item.content)
                  : (item.content as string);

              return (
                <Rectangle
                  key={index}
                  toggled={activeRectangle === index}
                  onClick={() => handleRectangleToggle(index, item.content)}
                >
                  <style.ImgCard src={imageSrc} alt={`card-${index}`} />
                </Rectangle>
              );
            })}
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
