import React from 'react';
import DeleteIcon from '@/assets/icons/화면GUI_Line/2020/Delete.svg?react';
import * as style from '@/styles/myInvitation/ReviewModalStyle';
import TestImage from './TestImage2.svg?react';
import { ReviewModalText } from '@/constants/myInvitation/MyInvitation';
import ButtonBottomNext from '../button/Btn_Bottom_Next';

type ReviewModalProps = {
  isModalOn: boolean;
  onClose: () => void;
};

const ReviewModal: React.FC<ReviewModalProps> = ({ isModalOn, onClose }) => {
  
  if (!isModalOn) return null;

  const targetWord = '불라불라';
  const lines = ReviewModalText.SubText.split('\n');

  return (
    <style.ModalBG>
      <style.ModalContainer>
        <style.DeleteContainer>

          {/* onClick 시 부모에서 전달한 onClose 함수 호출 */}
          <DeleteIcon onClick={onClose} style={{ cursor: 'pointer' }}/>
        </style.DeleteContainer>

        <TestImage />

        <style.TextContainer>
          {lines.map((line, index) => {
            if (line.includes(targetWord)) {
              const parts = line.split(targetWord);
              return (
                <div key={index}>
                  {parts[0]}
                  <span className="highlight">{targetWord}</span>
                  {parts[1]}
                </div>
              );
            }
            return <div key={index}>{line}</div>;
          })}
        </style.TextContainer>

        <ButtonBottomNext text="후기 남기러 가기" color="blue" />
      </style.ModalContainer>
    </style.ModalBG>
  );
};

export default ReviewModal;
