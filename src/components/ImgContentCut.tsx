import React, { useRef, useState } from "react";
import ReactNB from "@/components/top/Top_reactNB";
import NextButton from "@/components/button/Btn_Bottom_Next";
import Cropper from "react-cropper";
import TestImage from "@assets/테스트이미지/TestImage.svg";
import "cropperjs/dist/cropper.css";
import * as style from "@/styles/choiceCard/ImgContentCut";

const ImgContentCut: React.FC = () => {
  const cropperRef = useRef<HTMLImageElement>(null); 
  const [image, setImage] = useState<string>("pathimage"); 

  const handleCancel = () => {
    console.log("취소 클릭");
  };

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
      console.log("Cropped Image Data URL:", croppedDataURL);
    }
  };

  return (
    <>
      <ReactNB Back="취소" Front="재설정" Color="white" />
      <style.Container>
        <Cropper
            src={TestImage} // 이미지 URL
            style={{ height: 262, width: 350 }} // Cropper 크기
            guides={true} // 가이드 라인 표시
            ref={cropperRef} // 참조 연결
            zoomable={false} // 확대/축소 가능
            scalable={true} // 이미지 비율 변경 가능
            cropBoxResizable={true} // 크롭 박스 크기 조정 가능
            background={false} // 배경 제거
        />
      </style.Container>
      <style.Bottom>
        <NextButton text="다음" color="blue" width={true} onClick={handleNext} />
      </style.Bottom>
    </>
  );
};

export default ImgContentCut;
