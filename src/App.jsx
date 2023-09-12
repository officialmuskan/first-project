import { useState } from 'react'
// import { sculptureList } from './Data';
import './App.css'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import PackingList from './components/List';
import Textform from './components/textform';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";
import About from './components/About';


export default function App(){

  const[mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert(
      {
        msgs: message, 
        type:type
      }
    )
    setTimeout(
      ()=>{
        setAlert(null)
      }, 2000
    )
  }
    // const purpleClick = ()=>{
    //   document.body.style.backgroundColor = "purple";
      
    // }
    // const magentaClick = ()=>{
    //   document.body.style.backgroundColor = "magenta";
    // }
    // const oliveClick = ()=>{
    //   document.body.style.backgroundColor = "olive";
    // }
    const toggleStyle = (cls)=>{
        if(mode==="light"){
            document.body.style.backgroundColor = "#031930";
            setMode("dark")
            showAlert("You have enabled dark mode", "success")
        }
        
        else{
            document.body.style.backgroundColor = "white"
            setMode("light")
            showAlert("You have enabled light mode", "success")
        }
    }
  return(
    <>
    {/* <BrowserRouter> */}
    <Navbar title='TextUtils' mode={mode} toggleStyle={toggleStyle} />
    <Alert alert={alert}/>
    
  
  
      {/* <Routes> */}
        {/* <Route path="/" element= */}
        <Textform heading = "Text Utils - Text Analyzer" mode={mode} showAlert={showAlert}/>
         {/* /> */}
        {/* <Route path="about/*" element={<About mode={mode}/>} />
      </Routes>
    </BrowserRouter> */}

    

      </>
    );
}

