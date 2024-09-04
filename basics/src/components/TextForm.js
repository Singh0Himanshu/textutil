import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let nextText = text.toUpperCase(text)
        setText(nextText)
        props.showAlert("Converted to uppercase", "success");
    }
    const  handleLoClick = ()=>{
        let nextText = text.toLowerCase(text)
        setText(nextText)
        props.showAlert("Converted to lower case", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space has been removed", "success")
    }
    const handleClear=()=>{
        setText(setText.value="")
        props.showAlert("Text has been cleared", "success");
    }
    const [text,setText] = useState(' ');
    const [color,setColor] = useState(' ');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black',backgroundColor:color}}>
        {/* <h1>{props.heading}</h1> */}
        <div className="form-group my-5">
            {/* <h1></h1><label forlabel="myBox">Example text area</label><h1/> */}
            <h1 >Example text area</h1>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} will take minute to read</p>
        <h2 className='my=8'>Preview</h2>
        <p>{text.length>0?text:"Enter some text to preview"}</p>
    </div>
    </>
  )
}
