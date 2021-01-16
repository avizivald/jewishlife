import React from 'react';
import ReactFitText from 'react-fittext';

import './cell.css';


function LiTextFit(props) {
    const text = props.text

    return (<ReactFitText  className="section1">
        {text}
    </ReactFitText>

    );
}
export default LiTextFit;