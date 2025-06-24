import { useState } from "react"

function App() {
    const [color, setColor] = useState("black")
  return (
    <>
        <div className="w-full h-screen" style={{backgroundColor: color}}>
          <div className="grid p-4 gap-4 sm:grid-cols-6 absolute w-full bottom-0 bg-gray-100">
          <button onClick={()=>setColor("red")} className="min-h-[70px] bg-red-400 rounded-3xl">red</button>
          <button onClick={()=>setColor("blue")} className="min-h-[70px] bg-blue-400 rounded-3xl">blue</button>
          <button onClick={()=>setColor("green")} className="min-h-[70px] bg-green-400 rounded-3xl">green</button>
          <button onClick={()=>setColor("pink")} className="min-h-[70px] bg-pink-400 rounded-3xl">pink</button>
          <button onClick={()=>setColor("cyan")} className="min-h-[70px] bg-cyan-400 rounded-3xl">cyan</button>
          <button onClick={()=>setColor("purple")} className="min-h-[70px] bg-purple-400 rounded-3xl">purple</button>
          
        </div>
        </div>
    </>
  )
}

export default App
