import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Card/>
    </>
  )
}

export default App
