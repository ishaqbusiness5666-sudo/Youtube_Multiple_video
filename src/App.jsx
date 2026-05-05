import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState , useEffect } from 'react'

const App = () => {
  const [Theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", Theme);
    localStorage.setItem("theme", Theme);
  }, [Theme]);

  return (
    <div className='font-family:Arial flex flex-col gap-4 min-h-screen'>
      <Navbar/>
      <Main/>
    </div>
  )
}

export default App
