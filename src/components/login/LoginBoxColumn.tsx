import React from 'react';
import * as Style from '@/styles/login/ColumnComponentStyle';
import FeatureBoxFull from '@/components/login/FeatureBoxFull';
import FeatureBoxEmpty from '@/components/login/FeatureBoxEmpty';

interface ColumnProps {
    features: {
        title: string;
        subtitle: string;
        Icon: React.FC<{ width: number; height: number }>;
        iconSize?: { width: number; height: number };
    }[];
}

const LoginBoxColumn: React.FC<ColumnProps> = ({ features }) => (
    <Style.ColumnContainer>
        {features.map((feature, index) => (
            feature.title.includes('Rectangle') ? 
            <FeatureBoxEmpty key={index} title={feature.title}/> : 
            <FeatureBoxFull
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
            Icon={feature.Icon}
            iconSize={feature.iconSize}
         />
        ))}
    </Style.ColumnContainer>
);

export default LoginBoxColumn;
