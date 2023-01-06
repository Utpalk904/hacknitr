import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './input.css';

export default function FloatTextInput(props) {
    const [inputClass, setInputClass]=useState('text-input');
    const onFocus = ()=>{
        setInputClass('text-input filled')
    }

  return (
    <div className='input-container'>
        <input type={props.inputType} name={props.InputName} id={props.InputId} className={inputClass} placeholder={props.InputPlaceholder} onFocus={onFocus} />
        <label htmlFor={props.InputId} className="label">{props.InputLabel}</label>
    </div>
  )
}

FloatTextInput.propTypes = {
    InputType: PropTypes.string,
    InputName: PropTypes.string,
    InputId: PropTypes.string,
    InputPlaceholder: PropTypes.string,
    InputLabel: PropTypes.string
}

FloatTextInput.defaultProp = {
    InputType: 'text',
    InputName: 'Name',
    InputId: 'text-id',
    InputPlaceholder: 'Enter your ....',
    InputLabel: 'Label'
}