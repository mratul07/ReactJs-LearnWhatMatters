import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(5)

  // let counter = 5;

  const addValue = () => {
    // counter += 1;
    setCounter(counter+1)
    console.log(counter)
  }

  const decreseValue = () => {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value </button>
      <br/>
      <button onClick={decreseValue}>Decrese Value </button>
    </>
  )
}

export default App
