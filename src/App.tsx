import { useState } from 'react';
import Button from './components/Button/Button'
import Input from './components/Input/input';

function App() {
  const [counter, setCounter] = useState<number>(0);
  
  const addCounter = (e: React.SyntheticEvent) => {
    console.log(e.target);
    setCounter(counter + 1);
  }
  
  return (
    <>
      <Button onClick={addCounter}>Click me</Button>
      <Button appearance="primary">Click me</Button>
      <p>{counter}</p>
      <Input placeholder='email'/>
    </>
  )
}

export default App
