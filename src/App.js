import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }
  const color={
    bg:{
      light:"#f1efef",
      dark:"black",
      warning:"#ffd24a",
      danger:"#d12233",
      success:"#018146",
      primary:"#5393f0"
    }
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    setMode(cls)
    // if(mode==='light'){
    //   setMode('dark')
    //   document.body.style.backgroundColor = '#1b1818';
    //   showAlert("Theme Changed","success");
    // } 
    // else{
    //   setMode('light')
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Theme Changed","success");
    // } 
    // setMode(mod)
    // document.body.style.backgroundColor = mod;
    // showAlert(mod+" Mode has been Enabled","success");
  }
  return (
    <>
       {/* <Router> */}
        <Navbar color={color} title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
               {/* <Route exact path="/textUtils" element={<TextForm color={color} showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>}></Route> */}
              {/* <Route exact path="/textUtils/about" element={<About mode={mode}/>}></Route> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
          {/* </Routes> */}
        </div>
       {/* </Router> */}
    
      </>
  );
}

export default App;
