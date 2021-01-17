import React from 'react';
import ReactFitText from 'react-fittext';
import FitText from '@kennethormandy/react-fittext'


import './TextArea.css'


function TextArea(props) {

    let text = `<h1><strong>לעילוי נשמת</strong></h1>
    <p>הרב הגאון ר' שמחה בונים ב"ר ישראל זצוקלל"ה</p>
    <p><strong>נלב"ע אדר התש"ס</strong></p>
    <p><strong>התפילות והלימוד לעילוי נשמתו</strong></p>
    <p><strong>נא לכווין בברכות לעילוי נשמתו ולברך בכוונה</strong></p>`
    // const { arvit, mincha, shacharit, name } = props.
    return (
        <FitText compressor={6} minFontSize={30} maxFontSize={50}>
            <React.Fragment>
                <h1><strong>לעילוי נשמת</strong></h1>
                <p>&nbsp;</p>
                <p>הרב הגאון ר' <h1><strong>  שמחה בונים&nbsp;</strong></h1>ב"ר <h1><strong>ישראל</strong></h1> זצוקלל"ה</p>
                <p>&nbsp;</p>
                <h2><strong>נלב"ע אדר התש"ס</strong></h2>
                <p>&nbsp;</p>
                <p><strong>התפילות והלימוד לעילוי נשמתו</strong></p>
                <p>&nbsp;</p>
                <p><strong>נא לכווין בברכות לעילוי נשמתו ולברך בכוונה</strong></p>

                {/* {text} */}
            </React.Fragment>
        </FitText>
    );
}
export default TextArea;