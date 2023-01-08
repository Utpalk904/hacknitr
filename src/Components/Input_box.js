import React from 'react';
import '../Css/inputBox.css';

export default function InputBox(props) {

    return (
        <div className="inputBox">
            <input type="text" id={props.id} value={props.value} onChange={(e) => props.change(e.target.value)}/>
            <h3>{props.name}</h3>
        </div>
    )
}
