import { useEffect } from 'react'
import { useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'
import { ThemeProvider } from './contexts/Theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  const lightTheme = ()=>{
    setThemeMode("light")
  }

  // Actual theme change code
  useEffect(()=>{
    const mode = document.querySelector('html').classList;
    mode.remove("dark", "light");
    mode.add(themeMode)
  },[themeMode])
  
  return (

    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
