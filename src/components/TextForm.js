
import React, {useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("");
    const handelonClick =()=>{
        // console.log("uppercase is apply " + text)
        let newtext = text.toUpperCase();
        setText(newtext);
       
        // alert("Text is Convert Into Uppercase")
        
    }
    const Lowercase =()=>{
      // console.log("uppercase is apply " + text)
      let newtext = text.toLowerCase();
      setText(newtext);
      alert("Text is Convert Into Lowercase")
  }
  const firstletup=()=>{
    let  newtext = "";
    setText(newtext);
  }
    const handelonChange =(event)=>{
        // console.log("handel change apply")
        setText(event.target.value)
    }
    const copytext=()=>{
     var text = document.querySelector("#textbox");
     text.select();
     navigator.clipboard.writeText(text.value);
     document.querySelector("#textbox").style.textTransform = 'capitalize';
    }
    
    const Removespaces=()=>{
      let newtext = text.split(/[ ]+/);
      setText(newtext.join (" "));
      
     }
    
     const [mode, setMode] = useState("light");
     const darkon = ()=>{
       
    // let theme= document.querySelector("#onmode").style.backgroundColor = "white";
       console.log("hello")
       if(mode==="light"){
         setMode("dark")
         document.querySelector("#onmode").style.color = "White";
         document.querySelector("#onmode").style.backgroundColor = "#042743";
         document.querySelector("#textbox").style.backgroundColor = "lightblue";
        document.body.style.backgroundColor = '#042743' ;
        document.querySelector(".btn-close").style.display='none'
       
        setTimeout(() => {
          document.querySelector("#hidealert").style.display='none'
        }, 3000);
       
       }else {
         setMode("light")
        document.querySelector("#onmode").style.color = "black";
         document.querySelector("#onmode").style.backgroundColor = "white";
         document.body.style.backgroundColor = 'white' ;
        
       }
       
     }
    
     const showredbg=()=>{
      document.body.style.backgroundColor= "red"
      document.body.style.color= "white"
      document.querySelector("#onmode").style.backgroundColor = "red";
      document.querySelector("#textbox").style.backgroundColor = "pink";
  

      
    }
    const showyellowbg=()=>{
      document.body.style.backgroundColor= "yellow"
      document.querySelector("#onmode").style.backgroundColor = "yellow";
      document.body.style.color= "Black"
      document.querySelector("#textbox").style.backgroundColor = " lightblue";
     
    }
    const showgreenbg=()=>{
      document.body.style.backgroundColor= "green"
      document.querySelector("#onmode").style.backgroundColor = "green";
      document.body.style.color= "white"
      document.querySelector("#textbox").style.backgroundColor = " white";
     
    }
   
     
    
    
  return (
    <>
    <div id='onmode'>
    <div className="btn-group mx-3 my-3 " role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger mx-1" onClick={showredbg}>Red</button>
  <button type="button" className="btn btn-warning mx-1" onClick={showyellowbg}>Yellow</button>
  <button type="button" className="btn btn-success mx-1" onClick={showgreenbg}>Green</button>
</div>
 <div className='container'>
  <div className="my-3">
    <label htmlFor="textbox" className="form-label">
       <h3>{props.heading}</h3> 
        </label>
   <div className="form-check form-switch my-3">
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={darkon} />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode}</label>
</div>
   <textarea  className="form-control" value={text} placeholder="Enter Text Here...." onChange={handelonChange} id="textbox" rows="6"></textarea>
</div>
 <button className='btn btn-primary mx-2' onClick={handelonClick} >Convert tO Uppercase</button>
 <button className='btn btn-dark mx-2' onClick={Lowercase} >Convert tO Lowwercase</button>
 <button className='btn btn-success mx-2' onClick={firstletup} >Clear All</button>
 <button className='btn btn-info mx-2' onClick={copytext} >copy text</button>
 <button className='btn btn-info mx-2' onClick={Removespaces} >remove space</button>

    </div>
    <div className="container my-3">
      <h3>your text summary</h3>
      <p> <b>{text.split(" ").length} words and {text.length} character </b></p>
      <p> {0.008 * text.split(" ").length}min to read</p>
      <h3>Priview</h3>
      <p>{text.length>0?text:"please Enter Your Text"} </p>
      </div>
      </div>
    </>
  );
}
