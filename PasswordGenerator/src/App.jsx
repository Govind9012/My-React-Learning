import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const randomPassword = useCallback(()=>{
    let pass = "";
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()-~";
    for(let i = 1; i<= length ; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);      
      pass += str.charAt(ch);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = ()=>{
    inputRef.current?.select(); // To highlight the text has been selected
    inputRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    randomPassword();
  }, [length, numberAllowed, charAllowed, randomPassword])

  return (
    <>
      <div className='px-4 my-5 rounded-3xl w-full bg-gray-100 mx-auto max-w-md my-15'>
        <h1 className='text-cyan text-center text-xl my-3'>Password Generator</h1>
        <div className='mb-5 flex overflow-hidden shadow-xl/30 rounded-xl'>

          <input
           type="text"
           className='py-1 px-3 outline-none w-full mx-1 my-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-xl' 
           readOnly
           value={password}
           ref={inputRef}
           placeholder='Password'/>
           <button className=' bg-indigo-300 py-1 px-3 mx-1 my-2 rounded-xl hover:bg-yellow-500'
           onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='items-center gap-x-1 my-2'>
            <input type="range"
            min={8}
            max={99}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)} />
            <label className='mx-1'>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input type="checkbox" id="numberInput" 
            className='b-0' 
            defaultChecked = {numberAllowed}
            onChange={()=> setNumberAllowed((prev)=> (!prev))} />
            <label htmlFor="numberInput">Numbers</label>

            <input type="checkbox" id="charInput" 
            className='b-0' 
            defaultChecked = {charAllowed}
            onChange={()=> setCharAllowed((prev)=> (!prev))} />
            <label htmlFor="charInput">Characters</label>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default App
