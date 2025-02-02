import React from 'react';
import * as style from '@/styles/choiceCard/ModalStyle';
import NextButton from "@/components/button/Btn_Bottom_Next";

interface ModalProps {
  onClose: () => void; 
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <style.ModalBackground>
        <style.Modal>
            <style.Title>로그인 후 사진을 추가할 수 있어요!</style.Title> 
            <NextButton text='확인' color='blue' onClick={onClose} />
        </style.Modal>
    </style.ModalBackground>
  );
};

export default Modal;
