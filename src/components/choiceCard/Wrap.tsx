import React from 'react';
import * as style from '@/styles/choiceCard/WrapStyle';
import { Navigate, useNavigate } from 'react-router-dom';
import Btn from '@/components/button/Btn_Bottom_Next';

type WrapProps = {
  Title: string;
  SubText: string;
  WrapBool?: boolean;
};

const Wrap: React.FC<WrapProps> = ({ Title, SubText, WrapBool }) => {
    const targetWord = '특별함';
    const lines = SubText.split('\n');
    const navigate = useNavigate();

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
          {WrapBool ? (
            <div style={{ marginTop: '20px' }}>
              <Btn text='초대장 만들기' color='blue' width={false} onClick={() => navigate('/choicecard')} />
            </div>
          ) : null}
        </style.WrapSubTitle>
    </style.WrapBoxContainer>
  );
};

export default Wrap;
