import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './components/card/Card'

function App() {


  return (
    <>
      <Navbar/>
      <Card title="Hello World" description="Hello World Hello WorldHello WorldHello WorldHello World"/>
      <Card title="Hello World 2" description="Hello World 2"/>
      <Card  ></Card>
      <Footer/>
    </>
  )
}

export default App
