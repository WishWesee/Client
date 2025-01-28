import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactNB from "@/components/top/Top_reactNB";
import NextButton from "@/components/button/Btn_Bottom_Next";
import Cropper from "react-cropper";
import TestImage from "@assets/테스트이미지/TestImage.svg";
import "cropperjs/dist/cropper.css";
import * as style from "@/styles/choiceCard/ImgContentCut";
import { CropperContainer } from "@/styles/choiceCard/ChoiceCardStyle";

const ImgContentCut: React.FC = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const cropperRef = useRef<HTMLImageElement>(null); 
  const image = location.state?.image || ""; // 선택된 이미지 가져오기

  const handleReset = () => {
    if (cropperRef.current) {
      const cropper = (cropperRef.current as any).cropper;
      cropper.reset(); // Cropper.js의 초기 상태로 리셋
    }
  };

  const handleNext = () => {
    if (cropperRef.current) {
      const cropper = (cropperRef.current as any).cropper;
      const croppedDataURL = cropper.getCroppedCanvas().toDataURL();
      const existingImages = JSON.parse(localStorage.getItem("myImages") || "[]");
      localStorage.setItem("myImages", JSON.stringify([croppedDataURL, ...existingImages]));
      navigate("/choicecard");
    }
  };
  

  return (
    <>
      <ReactNB Back="취소" Front="재설정" Color="white" onBackClick={() => navigate("/choicecard")} onFrontClick={handleReset} />
      <style.Container>
        <CropperContainer>
        <Cropper
            src={image} // 이미지 URL
            style={{ height: '100%', width: '100%' }}
            aspectRatio={4 / 3}
            viewMode={1} // 크롭 영역이 이미지를 벗어나지 않게
            guides={true} // 가이드 라인 표시
            ref={cropperRef} // 참조 연결
            zoomable={false} // 확대/축소 가능
            scalable={true} // 이미지 비율 변경 가능
            cropBoxResizable={true} // 크롭 박스 크기 조정 가능
            background={false} // 배경 제거
        />
        </CropperContainer>
      </style.Container>
      <style.Bottom>
        <NextButton text="다음" color="blue" width={true} onClick={handleNext} />
      </style.Bottom>
    </>
  );
};

export default ImgContentCut;
