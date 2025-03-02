import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import { ErrorM } from './components/Pages/Error/ErrorM';
import { Layout } from './layout/Menu/Layout';
import { Product } from './components/Pages/Product/Product';
import { Authorization } from './layout/Authorization/Authorization';
import { Login } from './components/Pages/Login/Login';
import { Register } from './components/Pages/Register/Register';
import { RequireAuth } from './helpers/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { getProductById } from './components/Pages/Product/productService';

// eslint-disable-next-line react-refresh/only-export-components
const Menu = lazy(() => {
  return import(
    './components/Pages/Menu/Menu'
  ).then((module) => {
    return ({ default: module.Menu })
  }
  );
});

// eslint-disable-next-line react-refresh/only-export-components
const Cart = lazy(() => {
  return import(
    './components/Pages/Cart/Cart'
  ).then((module) => {
    return ({ default: module.Cart })
  });
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      {
        path: "/",
        element:
          <Suspense fallback={<>The Menu is loading...</>}>
            <Menu />
          </Suspense>,
      },
      {
        path: "/cart",
        element:
          <Suspense fallback={<>The Cart is loading...</>}>
            <Cart />
          </Suspense>,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Error</>,
        loader: async ({ params }) => defer({
          data: getProductById(params.id)
        })
      }
    ]
  },
  {
    path: "/authorization",
    element: <Authorization />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
