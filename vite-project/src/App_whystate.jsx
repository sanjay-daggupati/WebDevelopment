import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[counter,setcounter] =useState(15)
  //let counter =15
  const  addvalue = () =>{
   setcounter(counter+1)
    /*setcounter((prevCounter) =>prevCounter+1)
    setcounter((prevCounter) =>prevCounter+1)
    setcounter((prevCounter) =>prevCounter+1)
    setcounter((prevCounter) =>prevCounter+1)*/
    
  }
  const removevalue =() =>{
    setcounter(counter-1)
  }
  /*React is a UI library ,which provide a concept known as state ,and any change in the state will rerender the webpage 
  const[variable,counter]*/

  return (
    <>
    <h1>React Course {counter}</h1>
    <h1>Counter Value:{counter}</h1>
    <button
    onClick={addvalue}
    >Add value</button>{" "}
    <button
    onClick={removevalue}
    >Subract value</button>
    <p>footer:{counter}</p>
     </>
  )
}

export default App
