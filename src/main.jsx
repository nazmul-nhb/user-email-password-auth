import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Root';
import Home from './pages/Home';
import Login from './pages/Login';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
