import React from 'react';
import './MyInput.css'

function MyInput(props) {
    const placeholder = props.placeholder;
    const title = props.title;
    const name = props.name;
    return (
        <div className="inputBox">
            {<p>{title}</p>}
            <input className="MyInput"
            name={name}
            onChange={props.onChange}
                placeholder={placeholder}
                maxLength="25"
            ></input>
        </div>
    );
}
export default MyInput;