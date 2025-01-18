import React, { useState, useEffect } from 'react';
import TestImage from './TestImage.tsx';
import ArrowRight from '@/assets/icons/화면GUI_Line/2020/Arrow_Right.svg?react';
import * as style from '@/styles/myInvitation/MyInvitationContainerStyle';

type NBProps = {
  Title: string;
  Date: string;
};

const LetterContainer: React.FC<NBProps> = ({ Title, Date }) => {
  const [dimensions, setDimensions] = useState({ width: 160, height: 120 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setDimensions({ width: 328, height: 183 });
      } else if (window.innerWidth >= 768) {
        setDimensions({ width: 204, height: 156 });
      } else {
        setDimensions({ width: 160 , height: 120 });
      }
    };

    handleResize(); // 초기 화면 크기 설정
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <style.LetterContainer>
      <style.LetterImgBox>
        <TestImage width={dimensions.width} height={dimensions.height} />
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
