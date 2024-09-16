import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { Cart } from './components/Pages/Cart/Cart';
import { ErrorM } from './components/Pages/Error/ErrorM';
import { Layout } from './layout/Menu/Layout';
import { Product } from './components/Pages/Product/Product';
import axios from 'axios';
import { PREFIX } from './helpers/.API';

// eslint-disable-next-line react-refresh/only-export-components
const Menu = lazy(() => {
  return import(
    './components/Pages/Menu/Menu'
  ).then((module) => ({ default: module.Menu }));
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:
          <Suspense fallback={<>The Menu is loading...</>}>
            <Menu />
          </Suspense>,
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
          return defer({
            data: new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                  .get(`${PREFIX}products/${params.id}`)
                  .then(data => resolve(data))
                  .catch((err) => reject(err));
                }, 2000);
            }),
          });
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
