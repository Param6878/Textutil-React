import React,{useState} from 'react';

export default function Textform(props){
     const [text, SetText]=useState("Enter the Note...........")
      
     const handleupclick=()=>{
        console.log("you clicked on button")
        let newtext = text.toUpperCase()
        SetText(newtext)
     }
     const handleloclick=()=>{
        console.log("you clicked on button")
        let newtext = text.toLowerCase()
        SetText(newtext)
     }
     const handlelcopy=()=>{
        console.log("you clicked on button")
        let copytext = document.getElementById('myid')
        copytext.select()
        navigator.clipboard.writeText(copytext.value)
         
      }
     const clear=()=>{
        console.log("you werewe clicked on button")
        SetText("")
         
      }
 
     

     const handlechange=(event)=>{
          console.log("changed")
          SetText(event.target.value)
     }


    return(
      <>
        <div>
        <h1 style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="form-group ">
          <textarea className="form-control" value={text} onChange={handlechange} id="myid" rows="8" style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}></textarea>
        </div>
          <button className={`btn btn-${props.btcolor} mx-2`} onClick={handleupclick} >Converet to upercase</button>
          <button className={`btn btn-${props.btcolor} mx-2`} onClick={handleloclick} >Converet to lowercase</button>
          <button className={`btn btn-${props.btcolor} mx-2`} onClick={clear} >Clear All</button>
          <button className={`btn btn-${props.btcolor} mx-2`} onClick={handlelcopy} >Copy text</button>
          
          
       </div>
       <div className='my-3' style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} character</p>
        <h2>Preview</h2>
        <p>{text}</p>
       </div>

       

      </>
    )

}