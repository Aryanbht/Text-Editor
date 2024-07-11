import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  
  const handleUpClick = () => {
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted To UpperCase","success")
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLcClick = () => {
    let newtxt = text.toLowerCase();
    setText(newtxt);
    props.showAlert("Converted To LoweCase","success")
  };

  const clear = () => {
    setText("");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard", "success");
  };

  return (
    <>
      <div>
        <h1>ENTER THE TEXT</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="d-flex p-2 flex-wrap gap-3">
          <button className="btn btn-outline-danger" onClick={handleUpClick}>
            CONVERT TO UPPER CASE
          </button>
          <button className="btn btn-outline-danger mx-2" onClick={handleLcClick}>
            CONVERT TO LOWER CASE
          </button>
          <button className="btn btn-outline-danger mx-2" onClick={clear}>
            CLEAR TEXT
          </button>
          <button className="btn btn-outline-danger mx-2" onClick={copyText}>
            COPY TEXT
          </button>
        </div>
      </div>
      <div className="m-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter(Boolean).length} words and {text.length} characters
        </p>
        <p>
          {/* hello world  yes*/}
          
          {0.08 * text.split(" ").filter(Boolean).length} minutes you will take to read this
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}

 
 
