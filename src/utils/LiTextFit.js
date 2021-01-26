import React from 'react';
// import ReactFitText from 'react-fittext';

import './cell.css';


function LiTextFit(props) {
    const text = props.text

    return (<section className="section1">
        {text}
    </section>

    );
}
export default LiTextFit;