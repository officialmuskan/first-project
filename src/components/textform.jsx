import React, {useState} from 'react'

export default function Textform(props) {

    const[text, setText] = useState('Enter text here')
    const handleupper = ()=>{
        if(text.length!==0)
        {let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Text converted to Upper Case", "success")}

    }
    const handlelower = ()=>{
        if(text.length!==0)
        {let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Text converted to Lower Case", "success")}

    }
    const handleclear = ()=>{    
        setText("")

    }
    const handleonchage = (event)=>{
           setText(event.target.value)
    }
    const handlecopy = ()=>{
        if(text.length!==0)
        {navigator.clipboard.writeText(text)
        props.showAlert("Text Copied !! ", "success") }   
    }

    const handlespace = ()=>{

        // let space = text.split(" ").join(" ")
        let space = text.replace(/\s{2,}/g, ' ').trim() 
        setText(space)
    }

    // const[Mystyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // const[btn, setbtn] = useState("enable dark mode")
    // const togglestyle = ()=>{
    //     console.log("enable dark mode")
    //     if(Mystyle.color === 'black'){
    //         console.log("enable dark mode")
    //         setMystyle({   
    //                 color: 'white',
    //                 backgroundColor: 'black'    
    //         })
    //         setbtn("enable light mode")
    //     }
    //     else{
    //         setMystyle({   
    //             color: 'black',
    //             backgroundColor: 'white'
            
    //     })
    //         setbtn("enable dark mode")
    //     }
    // }

    
    
    

  return (
    <>
    <div className= "container"style={{color: props.mode === 'dark' ?'white' : 'black'}}>
        <div className='Container my-5' >
            <h2>{props.heading}</h2>
            <textarea className={`form-control my-5 text-${props.mode === 'dark' ?'light' : 'dark'}`} id="exampleFormControlTextarea1" rows="6" value={text} onChange={handleonchage} style={{backgroundColor: props.mode === 'dark' ?'cadetblue' : 'white'}}></textarea>
        </div>
        <div className='Container my-4'>
            <button className={`btn btn-${props.mode === 'dark' ?'primary' : 'dark'} mx-1 my-1`} onClick={handleupper}>Convert To UpperCase</button>
            <button className={`btn btn-${props.mode === 'dark' ?'primary' : 'dark'} mx-1 my-1`}onClick={handlelower}>Convert To LowerCase</button>
            <button className={`btn btn-${props.mode === 'dark' ?'primary' : 'dark'} mx-1 my-1`}onClick={handlecopy}>Copy Text</button>
            <button className={`btn btn-${props.mode === 'dark' ?'primary' : 'dark'} mx-1 my-1`}onClick={handlespace}>Remove Extra Spaces</button>
            <button className={`btn btn-${props.mode === 'dark' ?'primary' : 'dark'} mx-1  my-1`}onClick={handleclear}>Clear</button>
        </div>
        <div className="container my-7">
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>
    </>
  )
}
