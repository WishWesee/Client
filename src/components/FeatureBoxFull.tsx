import React from 'react';
import * as Style from '@styles/loginScreen/FeatureBoxComponentStyle';
import { FirstColumConstants, SecondColumConstants } from '../constants/loginScreen';

interface FeatureBoxProps {
    title: string;
    subtitle: string;
    Icon: React.FC<{ width: number; height: number }>;
    iconSize?: { width: number; height: number };
}

const FeatureBoxFull: React.FC<FeatureBoxProps> = ({ title, subtitle, Icon, iconSize = { width: 45, height: 45 } }) => {
    switch (title) {
        case FirstColumConstants.txt_Feature:
            return (
                <Style.FeatureBoxContainer>
                    <Style.TextFeature>
                        <Style.TitleText>{title}</Style.TitleText>
                        <Style.SubText>{subtitle}</Style.SubText>
                    </Style.TextFeature>
                    <Style.ImageBox>
                        <Icon width={iconSize.width} height={iconSize.height} />
                    </Style.ImageBox>
                </Style.FeatureBoxContainer>
            );

        case FirstColumConstants.txt_Feature2:
            return (
                <Style.FeatureBoxContainer2>
                    <Style.TextFeature>
                        <Style.TitleText>{title}</Style.TitleText>
                        <Style.SubText>{subtitle}</Style.SubText>
                    </Style.TextFeature>
                    <Style.ImageBox>
                        <Icon width={iconSize.width} height={iconSize.height} />
                    </Style.ImageBox>
                </Style.FeatureBoxContainer2>
            );

        case SecondColumConstants.txt_Feature:
            return (                
            <Style.FeatureBoxContainer3>
                <Style.TextFeature>
                    <Style.TitleText>{title}</Style.TitleText>
                    <Style.SubText>{subtitle}</Style.SubText>
                </Style.TextFeature>
                <Style.ImageBox>
                    <Icon width={iconSize.width} height={iconSize.height} />
                </Style.ImageBox>
            </Style.FeatureBoxContainer3>
            );
    }
};

export default FeatureBoxFull;
