import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";
import React, { useState } from 'react';


function App() {
  const [mode, styleMode] = useState({
    color: 'light',
    textColor: 'black',
    backgroundColor: 'white',
    primaryClr: 'primary',
    btnText:'Enable',
    btnText1:'Enable'
  });


  const toggleButtonDark = () => {
    if (mode.color === 'dark') {
      document.body.style.backgroundColor = 'white'
      styleMode({
        color: 'light',
        textColor: 'black',
        primaryClr: 'primary',
        btnText:'Enable',
        btnText1:'Enable',
      
      })
    } else {
      document.body.style.backgroundColor = 'grey'
      styleMode({
        color: 'dark',
        textColor: 'white',
        primaryClr: 'primary',
        btnText:'Disable',
        btnText1:'Enable',
      })

    }
  }
  const toggleButtonRed = () => {
    if (mode.color === 'dark') {
      document.body.style.backgroundColor = 'white'
      styleMode({
        color: 'light',
        textColor: 'black',
        primaryClr: 'primary',
        btnText1:'Enable',
        btnText:'Enable',
      })
    } else {
      document.body.style.backgroundColor = 'red'
      styleMode({
        color: 'dark',
        textColor: 'yellow',
        primaryClr: 'primary',
        btnText1:'Disable',
        btnText:'Enable',
      })

    }
  }


  return (
    <>

      <NavBar mode={mode} toggleBtnDark={toggleButtonDark} toggleBtnRed={toggleButtonRed} />
      <TextArea title='Enter the text' mode={mode} />


    </>
  );
}

export default App;



