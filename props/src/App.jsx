import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  
  return (
    <>
       {/* <h1 className='bg-green-400 mb-4'>Hello React</h1> */}

       <Card name = "Atul" bio = "Frontend Engineer"/>
       <Card name = "Jay" bio = "Backend Engineer"/>
       <Card name = "Abhishek" bio = "Data Analyst"/>
       <Card name = "Moye Moye" bio = "Meme Expert"/>
    </>
  )
}

export default App
