import React from 'react';
import * as style from '@/styles/choiceCard/WrapStyle';

type WrapProps = {
  Title: string;
  SubText: string;
};



const Wrap: React.FC<WrapProps> = ({ Title, SubText }) => {
    const targetWord = '특별함';
    const lines = SubText.split('\n');

  return (
    <style.WrapBoxContainer>
        <style.WrapTitle>{ Title }</style.WrapTitle>
        <style.WrapSubTitle>
        {lines.map((line, index) => {
                if (line.includes(targetWord)) {
                    const parts = line.split(targetWord);
                    return (
                        <div key={index}>
                            {parts[0]}<span className='highlight'>{targetWord}</span>{parts[1]}
                        </div>
                    );
                }
                return <div key={index}>{line}</div>;
            })}
        </style.WrapSubTitle>
    </style.WrapBoxContainer>
  );
};

export default Wrap;