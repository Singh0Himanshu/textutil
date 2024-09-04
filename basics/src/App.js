import './App.css';
import Navigation from './components/Navigation';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }
  const [mode, setMode]=useState("light")
 const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success")
    setInterval(()=>{
      document.title = 'TextUtil is amazing';
    },1800);
    setInterval(()=>{
      document.title = 'Learning phase';
    },1500);
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success")
    setInterval(()=>{
      document.title = 'TextUtil is amazing';
    },1800);
    setInterval(()=>{
      document.title = 'Learning phase';
    },1500);
  }
 }
  return (
  <>
    <Navigation title="Text utils" mode={mode} aboutText="About" toggleMode={toggleMode} />
     <Alert alert={alert} />
     <TextForm mode={mode} showAlert={showAlert} /> 
     
  </>
  ); 
}

export default App;