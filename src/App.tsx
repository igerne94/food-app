import { useState } from 'react';
import Button from './components/Button/Button'
import Input from './components/Input/Input';
import { Route, Routes } from 'react-router-dom';
import { Menu } from './components/Pages/Menu/Menu';
import { Cart } from './components/Pages/Cart/Cart';
import { ErrorM } from './components/Pages/Error/ErrorM';

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
      <Input placeholder='email' />
      <div>
        <a href='/'>Menu</a>
        <a href='/cart'>Cart</a>
      </div>
      {/* Everything outside routing: ^ - is common */}
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<ErrorM />} />
      </Routes>
    </>
  )
}

export default App
