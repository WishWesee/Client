import React from 'react';
import * as style from '@/styles/choiceCard/ModalStyle';
import NextButton from "@/components/button/Btn_Bottom_Next";

const Modal: React.FC = () => {
  return (
    <style.ModalBackground>
        <style.Modal>
            <style.Title>로그인 후 사진을 추가할 수 있어요!</style.Title> 
            <NextButton text='확인' color='blue'/>
        </style.Modal>
    </style.ModalBackground>
  );
};

export default Modal;