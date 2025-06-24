import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  const increment = function x(){
     if(counter < 30) {
      setCounter(++counter)
     }    
   }
   const decrement = ()=>{
    if(counter > 0) {
      setCounter(--counter)
    }
    }
    

    return (
    <>
      <p>counter = {counter}</p>

      <button onClick={increment}>Add Value : {counter}</button>
      <br />
      <button onClick={decrement}>Decrease value : {counter}</button>
      <footer>counter = {counter}</footer>
    </>
  )
}


//this whole commented was the problem thats why react was introduced

// function App() {
//   let counter = 15

//   const increment = function x(){
//     counter++;
//     console.log(counter);
    
//   }
//   return (
//     <>
//       <p>counter = {counter}</p>

//       <button onClick={increment}>{counter}</button>
//       <footer>counter = {counter}</footer>
      
//     </>
//   )
// }

export default App
