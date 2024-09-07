import { useState } from 'react';
import './App.css'
import Button from './components/Button'

function App() {
  const [counter, setCounter] = useState<number>(0);
  
  const addCounter = (e: React.SyntheticEvent) => {
    console.log(e.target);
    setCounter(counter + 1);
  }
  
  return (
    <>
      <Button onClick={addCounter}>Click me</Button>
      <p>{ counter }</p>
    </>
  )
}

export default App
