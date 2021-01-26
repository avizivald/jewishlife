import React from 'react';
import LiTextFit from './LiTextFit'

import './cell.css';


function Cell(props) {
    // const { arvit, mincha, shacharit, name } = props.
    let title = <h2>לעילוי נשמת</h2>
   let content = <p>  וחבל על דאבדיןנלבע יט חשוון התשלא</p>
    return (
        <div className='cell'>
            <div className='any'><div className="section1">
                <LiTextFit text={title} />
                <LiTextFit text={content} />
                <LiTextFit text={title} />
                <LiTextFit text={content} />
                <LiTextFit text={title} />
                <LiTextFit text={content} />
                <LiTextFit text={title} />
                <LiTextFit text={content} />
                <LiTextFit text={title} />
                <LiTextFit text={content} />
            </div></div>
        </div>

    );
}
export default Cell;