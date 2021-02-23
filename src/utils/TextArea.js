import React,{useEffect} from 'react';
import ReactFitText from 'react-fittext';
import FitText from '@kennethormandy/react-fittext'


import './TextArea.css'


function TextArea(props) {
    console.log('props text ',props.text);
    let thiss;
    useEffect(() => click(), [])
    function click() {
        console.log('width',thiss.getBoundingClientRect().height);
        console.log('isOverflown(thiss)====>>>> ',isOverflown(thiss));
        // console.log('screen.width',window.screen);
        // console.log('screen.matchMedia ',window.devicePixelRatio );
        let size = thiss.getBoundingClientRect().width /50;
        console.log('size.size ',size );
        if (thiss.getBoundingClientRect().width > 1000 ) {
            
            thiss.style.fontSize= Math.round(size*1.3)+'px';
            console.log('fz ',Math.round(size*1.3)+'px');
        }else if(thiss.getBoundingClientRect().width > 700 ) {
            
            thiss.style.fontSize= Math.round(size*2.2)+'px';
            console.log('fz ',Math.round(size*2.2)+'px');
        }else if(thiss.getBoundingClientRect().width > 500 ) {
            
            thiss.style.fontSize= Math.round(size*2.7)+'px';
            console.log('fz ',Math.round(size*2.7)+'px');
        }else if(thiss.getBoundingClientRect().width > 300 ) {
            
            thiss.style.fontSize= Math.round(size*3.8)+'px';
            console.log('fz ',Math.round(size*3.8)+'px');
        }
        // else (thiss.getBoundingClientRect().width > 250 ) {
            
        //     thiss.style.fontSize= Math.round(size*2.9)+'px';
        //     console.log('fz ',Math.round(size*2.9)+'px');
        // }
         else {
            console.log('fz ',Math.round(size*3.3)+'px');
            thiss.style.fontSize= Math.round(size*3.3)+'px';
            
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
    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
      }
      
let onchange= (e)=> {
console.log('eeeeeeee',e);
}
    let text = props.text ? props.text :` <h1><strong>לעילוי נשמת</strong></h1>
    <p>&nbsp;</p>
    <p>'הרב הגאון ר <h1><strong>  שמחה בונים&nbsp;</strong></h1>ב"ר <h1><strong>ישראל</strong></h1> זצוקלל"ה</p>
    <p>&nbsp;</p>
    <h2><strong>נלב"ע אדר התש"ס</strong></h2>
    <p>&nbsp;</p>
    <p><strong>התפילות והלימוד לעילוי נשמתו</strong></p>
    <p>&nbsp;</p>
    <p><strong>נא לכווין בברכות לעילוי נשמתו ולברך בכוונה</strong></p> `
    console.log('text long ',text.length);
    // const { arvit, mincha, shacharit, name } = props.
    return (
        // <FitText compressor={6} minFontSize={props.min} maxFontSize={30}>
            <div className='TextAreaHtml'  ref={el => {
                if (!el) return;
                thiss = el;
                console.log(el.clientHeight ); // prints 200px
            }} dangerouslySetInnerHTML={{ __html: text }} />
        // </FitText>
    );
}
export default TextArea;