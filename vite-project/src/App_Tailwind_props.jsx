import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
   let myObj={
    name:"Sanjay",
    age:21,
    address:{
      city:'Vijayawada',
      state:"Andhra Pradesh",
      country:'India'
    }
   }
   let newArr =[1,2,3,4,5,,6,7,8,9]
  return (
    <>
    <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with tailwind</h1>
    <Card username="Sanjay" myArr={newArr}/>
    <Card Obj={myObj}/>
    <Card username="Json" post ="Full stack developer"/>
    </>
  )
}

export default App
