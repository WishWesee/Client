import React from 'react';
import * as Style from '@/styles/login/GreetingMessageComponentStyle';

interface GreetingMessageProps {
    message: string;
}

const GreetingMessage: React.FC<GreetingMessageProps> = ({ message }) => {
    const targetWord = 'WishWesee';
    const lines = message.split('\n');

    return (
        <Style.GreetingMessageContainer>
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
        </Style.GreetingMessageContainer>
    );
};

export default GreetingMessage;
