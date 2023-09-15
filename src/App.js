
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes
 
// } from "react-router-dom";




function App() {

  const [mymode, setmymode]=useState('light');
  const [modetext, setmodetext]=useState('Dark Mode')
  const [btcolor, setbtcolor]=useState('primary')

  const [alert, setalert]=useState(null)

  const showalert=(message , type)=>{
        setalert({
          mesg: message,
          type: type
        })
       
        setTimeout(() => {
          setalert(null)
        }, 1500);

  } 


  const modechange=()=>{
       if(mymode === 'light'){
        setmymode('dark')
        setmodetext('Light Mode')
        setbtcolor('secondary')
        showalert("Dark mode", "success")
        document.body.style.backgroundColor='#343a40'
       }
       else{
        setmymode('light')
        setmodetext('Dark Mode')
        setbtcolor('primary')
        showalert("Light mode", "success")
        document.body.style.backgroundColor='white'
       }
  }
  

  return (
    <>
    {/* <Router> */}
         <Navbar  about="About" title="PARAM" mode={mymode} modechange={modechange} modetext={modetext} />
         <Alert alert={alert}/>
              <div className="container my-3">
               {/* <switch> */}
            {/* <Routes>
               <Route path="/" element={  ...  textform...}> */}
               <Textform heading="Enter The Text Below" mode={mymode} btcolor={btcolor}/>
               {/* </Route>
               <Route path="/about" element={<About mode={mymode}/>}>
               </Route> */}
            {/* </Routes> */}
         {/* </switch> */}
        </div>
    {/* </Router> */}
    </>
  );
}

export default App;
