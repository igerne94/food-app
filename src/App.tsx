import { useState } from 'react';
import Button from './components/Button/Button'
import Input from './components/Input/Input';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './components/Pages/Menu/Menu';
import { Cart } from './components/Pages/Cart/Cart';
import { ErrorM } from './components/Pages/Error/ErrorM';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <ErrorM />,
  },
]);

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
      <RouterProvider router={router} />
    </>
  )
}

export default App
