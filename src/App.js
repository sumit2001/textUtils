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

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1b1818';
      showAlert("Dark Mode has been Enabled","success");
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    } 
    // setMode(mod)
    // document.body.style.backgroundColor = mod;
    // showAlert(mod+" Mode has been Enabled","success");
  }
  return (
    <>
      {/* // <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>}></Route> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>}></Route> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>
          {/* </Routes> */}
        </div>
      {/* // </Router> */}
    
      </>
  );
}

export default App;
