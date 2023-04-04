import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './components/Home';
import Category from './components/Category';
import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/category',
      element: <Category />,
      loader: (() => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'))
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    }
  ]
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
