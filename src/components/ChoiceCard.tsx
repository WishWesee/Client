import React, { useState } from 'react';
import AddIcon from "@/assets/icons/화면GUI_Line/2020/Add.svg?react";
import ImgIcon from "@/assets/icons/화면GUI_Full/2424_Activate/Img.svg?react";
import HorizontalSB from "@/components/choiceCard/HorizontalSB";
import ReactNB from "@/components/top/Top_reactNB";
import Rectangle from "@/components/choiceCard/Rectangle";
import Wrap from "@/components/choiceCard/Wrap";
import NextButton from "@/components/button/Btn_Bottom_Next";
import { choiceCardPageTexts, choiceCardPageUI } from "@/constants/choiceCard/Wrap";
import * as style from '@/styles/choiceCard/ChoiceCardStyle';

const ChoiceCard: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setActiveIndex(index); 
  };

  return (
    <>
      <ReactNB Back={choiceCardPageUI.Btn_rNB_Back} Front={choiceCardPageUI.NullFront}></ReactNB>
      <style.Content>
        <Wrap Title={choiceCardPageTexts.Title} SubText={choiceCardPageTexts.SubText}></Wrap>
        <style.Wrap_Card>
          <style.HorizontalSB_Content>
            <style.Btn_hSB_New>
              <AddIcon />
              <ImgIcon />
            </style.Btn_hSB_New>
            <HorizontalSB
              Title="전체"
              Toggled={activeIndex === 0}
              onClick={() => handleToggle(0)}
            />
            <HorizontalSB
              Title="MY"
              Toggled={activeIndex === 1}
              onClick={() => handleToggle(1)}
            />
            <HorizontalSB
              Title="생일"
              Toggled={activeIndex === 2}
              onClick={() => handleToggle(2)}
            />
            <HorizontalSB
              Title="여행"
              Toggled={activeIndex === 3}
              onClick={() => handleToggle(3)}
            />
            <HorizontalSB
              Title="연말"
              Toggled={activeIndex === 4}
              onClick={() => handleToggle(4)}
            />
          </style.HorizontalSB_Content>
          <style.Img_Content_Card>
            <style.Column>
              <Rectangle />
              <Rectangle />
              <Rectangle />
            </style.Column>
            <style.Column>
              <Rectangle />
              <Rectangle />
              <Rectangle />
            </style.Column>
          </style.Img_Content_Card>
          <style.Bottom>
            <NextButton text="다음" color="grey" />
          </style.Bottom>
        </style.Wrap_Card>
      </style.Content>
    </>
  );
};

export default ChoiceCard;
