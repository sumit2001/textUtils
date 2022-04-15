import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleSeClick=()=>{
        let newText=sentenceCase(text);
        setText(newText);
        props.showAlert("Converted to SentenceCase","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }
    const handleClearClick=()=>{
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    // setText("new Text");
    function sentenceCase (str) {
        str = str.toString();
        
        return str.replace(/\w\S*/g, 
        function(txt){return txt.charAt(0).toUpperCase() +   txt.substr(1).toLowerCase();});
    }
    function wordLength(){
        let len=text.split(" ").length;
        return text.split(" ")[len-1]===''?len-1:len;
    } 
    function getStyle(){
        return {
            backgroundColor:props.mode==='light'?'#575252':'white',
            color:props.mode==='light'?'white':'#575252',
        };
    }
    return (
    <>
        <div className="container">
            <h1 style={{color:props.mode==='light'?'#1b1818':'white'}}>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} placeholder="Enter text here" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#1b1818':'white',color:props.mode==='light'?'#1b1818':'white'}} rows="8"></textarea>
            </div>
            <button style={getStyle()} className="btn mx-1 my-1" onClick={handleUpClick}><b>Convert to UpperCase</b></button>
            <button style={getStyle()} className="btn mx-1 my-1" onClick={handleSeClick}><b>Convert to SentenceCase</b></button>
            <button style={getStyle()} className="btn mx-1 my-1" onClick={handleLoClick}><b>Convert to LowerCase</b></button>
            <button style={getStyle()} className="btn mx-1 my-1" onClick={handleClearClick}><b>Clear Text</b></button>
            <button style={getStyle()} className="btn mx-1 my-1" onClick={handleCopy}><b>Copy Text</b></button>
            <button style={getStyle()} className="btn mx-1 my-1" onClick={handleExtraSpaces}><b>Remove Extra Spaces</b></button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'#1b1818':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{wordLength()} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the Textbox above to preview it here"}</p>
        </div>
    </>
  )
}
