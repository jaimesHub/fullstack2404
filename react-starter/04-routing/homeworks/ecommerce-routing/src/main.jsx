import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  Outlet,
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
import { AuthProvider } from './AuthContext.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <ProtectedRoute>
        <App />
      </ProtectedRoute>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'products',
        element:
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>,
        children: [
          {
            path: '',
            element: <ProductListPage />,
          },
          {
            path: ':id',
            element: <ProductPage />,
          }
        ]
      },
      {
        path: 'invoices',
        element:
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>,
        children: [
          {
            path: '',
            element: <InvoiceListPage />,
          },
          {
            path: ':id',
            element: <InvoicePage />,
          }
        ]
      },
      {
        path: 'cart',
        element:
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
      },
      {
        path: 'profile',
        element:
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
      },
      {
        path: 'about',
        element:
          <ProtectedRoute>
            <AboutPage />
          </ProtectedRoute>
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
