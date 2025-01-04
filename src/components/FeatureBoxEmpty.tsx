import React from 'react';
import * as Style from '@styles/loginScreen/FeatureBoxComponentStyle';

interface FeatureBoxEmptyProps {
    title: string;
}

const FeatureBoxEmpty: React.FC<FeatureBoxEmptyProps> = ({title}) => {

    switch (title) {
        case "Rectangle1":
            return <Style.Rectangle1/>;
        case "Rectangle2":
            return <Style.Rectangle2/>;
        case "Rectangle5":
            return <Style.Rectangle5/>
        case "Rectangle6":
            return <Style.Rectangle6/>;
        case "Rectangle7":
            return <Style.Rectangle7/>;
        case "Rectangle8":
            return <Style.Rectangle8/>;
        case "Rectangle10":
            return <Style.Rectangle10/>
        case "Rectangle11":
            return <Style.Rectangle11/>;
    }

};

export default FeatureBoxEmpty;
    