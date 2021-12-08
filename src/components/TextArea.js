import React, { useState } from 'react'

export default function TextArea(props) {
    const [text, setText] = useState('Hey type here!');
    function onchangeHandle(event) {
        let newText = event.target.value;
        setText(newText);
    }
    function handleOnSubmit() {
        let finalText = text.toUpperCase();
        setText(finalText);
    }
    return (
        <>
            <div className='container my-4'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <h1 style={{ color:props.mode.textColor}}>{props.title}</h1> </label>
                    <textarea style={{ backgroundColor: props.mode.color=== 'dark' ? 'grey' : 'white',color:props.mode.textColor}} className="form-control" onChange={onchangeHandle} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="button" onClick={handleOnSubmit} className="btn btn-primary">Click to change to uppercase</button>
                <div>
                    <p style={{ color:props.mode.textColor}} className='my-2'>{text.split(' ').length - 1} word and {text.length} characters</p>
                </div>
                <h2 style={{ color:props.mode.textColor}} >Preview</h2>
                <p style={{ color:props.mode.textColor}} >{text}</p>
            </div>
        </>
    )
}
