import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/mainLayout/MainLayout.jsx';
import Home from './components/home/Home.jsx';
import Details from './components/details/Details.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoutes from './components/route/PrivateRoutes.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/details/:id",
        loader: () => fetch('/data.json'),
        element: <PrivateRoutes><Details></Details></PrivateRoutes>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
