import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-green-400 rounded-xl'>Tailwind Testing</h2>
      <Card name="Govind Chaudhary" pronounce='He/Him'/>
      <Card name="Vidhi" pronounce='She/Her'/>
    </>
  )
}

export default App
