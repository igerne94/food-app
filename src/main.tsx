import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Menu } from './components/Pages/Menu/Menu';
import { Cart } from './components/Pages/Cart/Cart';
import { ErrorM } from './components/Pages/Error/ErrorM';
import { Layout } from './layout/Menu/Layout';
import { Product } from './components/Pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helpers/.API';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Error</>,
        loader: async ({ params }) => {
          await new Promise<void>((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
          const { data } = await axios.get(`${PREFIX}products/${params.id}`);
          return data;
        }
      }
    ]
  },
  {
    path: "*",
    element: <ErrorM />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
