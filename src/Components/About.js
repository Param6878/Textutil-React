// import react, {useState} from 'react'
import React from 'react'

export default function About(props){
    
// const [mystyle, newstyle]= useState({
//                                         color: 'black',
//                                         backgroundColor: 'white'
//                                     })

// const [buttontext, newbuttontext]=useState("dark mode")

//     const mode=()=>{
//          if(mystyle.color === 'white'){
//             newstyle({
//                 color: 'black',
//                 backgroundColor: 'white'
//             })
//             newbuttontext("Dark mode")
//         }
        
//         else{
//             newstyle({
//                 color: 'white',
//                 backgroundColor: 'black'
//             })
//             newbuttontext("Light mode")
//         }

//     }
   


    return(
        <>
                   {/* <h1 style={mystyle}>About Section</h1> */}
                   <h1 style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>About Section</h1>
                    {/* <div className="form-group" style={mystyle}> */}
                    <div className="form-group" style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>
                        {/* <label htmlFor="exampleFormControlSelect1"style={mystyle}>Example select</label> */}
                        <label htmlFor="exampleFormControlSelect1"style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>Example select</label>
                        {/* <select className="form-control" id="exampleFormControlSelect1"style={mystyle} > */}
                        <select className="form-control" id="exampleFormControlSelect1"style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}} >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    {/* <div className="form-group"style={mystyle}> */}
                    <div className="form-group"style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>
                        {/* <label htmlFor="exampleFormControlSelect2"style={mystyle}>Example multiple select</label> */}
                        <label htmlFor="exampleFormControlSelect2"style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>Example multiple select</label>
                        {/* <select multiple className="form-control" id="exampleFormControlSelect2"style={mystyle}> */}
                        <select multiple className="form-control" id="exampleFormControlSelect2"style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>
                        <option >1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                    </div>
                    {/* <div className="form-group" style={mystyle}> */}
                    <div className="form-group" style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>
                        {/* <label htmlFor="exampleFormControlTextarea1"style={mystyle}>Example textarea</label> */}
                        <label htmlFor="exampleFormControlTextarea1"style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}>Example textarea</label>
                        {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"style={mystyle}></textarea> */}
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"style={{background: props.mode ==='dark'?'#343a40':'white', color:props.mode ==='dark'?'white':'black'}}></textarea>
                    </div>
                    {/* <button className="btn btn-primary" onClick={mode}>{buttontext}</button> */}
             
        </>
    )
}
