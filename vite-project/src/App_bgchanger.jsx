import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color,setcolor] = useState('olive')
 /* function changecolor(color){
    setcolor(color)
  }*/
  return (
    <>
     <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
               <button 
               onClick={()=>setcolor('red')}
               className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
               style={{backgroundColor:"red"}}>Red</button>
                <button 
               onClick={()=>setcolor('green')}
               className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
               style={{backgroundColor:"green"}}>Green</button>
               <button 
               onClick={()=>setcolor('yellow')}
               className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
               style={{backgroundColor:"yellow"}}>yellow</button>
                <button 
               onClick={()=>setcolor('blue')}
               className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
               style={{backgroundColor:"blue"}}>blue</button>
            </div>
        </div>
     </div>
    </>
  )
}

export default App
