import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/Error';

import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/contact',
        element: <Contact />,
      }
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/**
 * TODO
 * 
 * 1. Active link styling: https://reactrouter.com/en/main/start/tutorial#active-link-styling
 * 2. Global Pending UI: https://reactrouter.com/en/main/start/tutorial#global-pending-ui
 */