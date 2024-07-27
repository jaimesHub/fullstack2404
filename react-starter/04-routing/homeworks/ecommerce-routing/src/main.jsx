import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import ProductListPage from './components/ProductList.jsx'
import ProductPage from './components/Product.jsx'
import InvoiceListPage from './components/InvoiceList.jsx'
import InvoicePage from './components/Invoice.jsx'
import CartPage from './components/Cart.jsx'
import ProfilePage from './components/Profile.jsx'
import AboutPage from './components/About.jsx'
import LoginPage from './components/Login.jsx'
import RegisterPage from './components/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products',
        element: <ProductListPage />,
        children: [
          {
            path: ':id',
            element: <ProductPage />
          }
        ]
      },
      {
        path: 'invoices',
        element: <InvoiceListPage />,
        children: [
          {
            path: ':id',
            element: <InvoicePage />
          }
        ]
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'profile',
        element: <ProfilePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      }
    ]
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
