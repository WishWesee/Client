import React from 'react';
import TestImage from './TestImage.svg?react';
import ArrowRight from '@/assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react';
import * as style from '@/styles/myInvitation/MyInvitationContainerStyle';

type NBProps = {
  Title: string;
  Date: string;
};

const LetterContainer: React.FC<NBProps> = ({ Title, Date }) => {
  return (
    <style.LetterContainer>

        <style.LetterImgBox>
            <TestImage />
        </style.LetterImgBox>

        <style.LetterTextBox>
            <style.LetterTitleBox>
                {Title}
                <ArrowRight/>
            </style.LetterTitleBox>
            <style.LetterDateBox>
                {Date}
            </style.LetterDateBox>
        </style.LetterTextBox>

    </style.LetterContainer>
  );
};

export default LetterContainer;