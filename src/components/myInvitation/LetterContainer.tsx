import React, { useState, useEffect } from 'react';
import TestImage from './TestImage2.svg?react';
import ArrowRight from '@/assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react';
import * as style from '@/styles/myInvitation/MyInvitationContainerStyle';

type NBProps = {
  Title: string;
  Date: string;
  Image: string;
};

const LetterContainer: React.FC<NBProps> = ({ Title, Date, Image}) => {

  return (
    <style.LetterContainer>
      <style.LetterImgBox>
        <img
            src={Image}
            alt={Title}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '4px 4px 0px 0px',
              objectFit: 'cover',
            }}
          />
      </style.LetterImgBox>

      <style.LetterTextBox>
        <style.LetterTitleBox>
          {Title}
          <ArrowRight />
        </style.LetterTitleBox>
        <style.LetterDateBox>{Date}</style.LetterDateBox>
      </style.LetterTextBox>
    </style.LetterContainer>
  );
};

export default LetterContainer;
