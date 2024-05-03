import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count,setCount]=useState(0);

  const addValue = () =>{
    if(count>=20){
      return;
    }
    else{
      setCount(++count);
    }
  }

  const removeValue = () =>{
    if(count<=0){
      return;
    }
    else{
      setCount(--count);
    }
  }
  return (
    <>
      <h1>React with AJ</h1>
      <h2>Counter Value : {count}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br/>
      <button
        onClick={removeValue}
      >Remove Value </button>
    </>
  )
}

export default App
