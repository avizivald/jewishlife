import React,{useEffect} from 'react';
import ReactFitText from 'react-fittext';
import FitText from '@kennethormandy/react-fittext'


import './TextArea.css'


function TextArea(props) {
    let thiss;
    useEffect(() => click(), [])
    function click() {
        console.log('width',thiss.getBoundingClientRect().width);
        let size = thiss.getBoundingClientRect().width /50;
        if (thiss.getBoundingClientRect().width > 700) {
            
            thiss.style.fontSize= Math.round(size)*2+'px';
        } else {
            thiss.style.fontSize= Math.round(size)*1.9+'px';
            
        }
        // thiss.style.h1 = {}
        // thiss.style.h1.fontSize= Math.round(size)*80+'px';
        // console.log('ddddddddddd', thiss.style);
        // for (let index = 0; index < thiss.children.length; index++) {
        //     const element = thiss.children[index];
        //     console.log('elem',element.style);
        //     console.log('elem',element.tagName);
        //     if (element.tagName == 'H1') {
        //         console.log('hhhhhhhhhhh111111111111');
        //     } else {
                
        //     }
        // }
        // thiss.children.forEach(element => {
        //     if (element =='h1') {
        //         console.log('hhh');
        //     } else {
                
        //     }
            
        // });
    }

    let text = ` <h1><strong>לעילוי נשמת</strong></h1>
    <p>&nbsp;</p>
    <p>'הרב הגאון ר <h1><strong>  שמחה בונים&nbsp;</strong></h1>ב"ר <h1><strong>ישראל</strong></h1> זצוקלל"ה</p>
    <p>&nbsp;</p>
    <h2><strong>נלב"ע אדר התש"ס</strong></h2>
    <p>&nbsp;</p>
    <p><strong>התפילות והלימוד לעילוי נשמתו</strong></p>
    <p>&nbsp;</p>
    <p><strong>נא לכווין בברכות לעילוי נשמתו ולברך בכוונה</strong></p> `
    // const { arvit, mincha, shacharit, name } = props.
    return (
        // <FitText compressor={6} minFontSize={props.min} maxFontSize={30}>
            <div className='TextAreaHtml' ref={el => {
                if (!el) return;
                thiss = el;
                console.log(el.getBoundingClientRect().width); // prints 200px
            }} dangerouslySetInnerHTML={{ __html: text }} />
        // </FitText>
    );
}
export default TextArea;