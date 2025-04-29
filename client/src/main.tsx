import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootMenu from './RootMenu.tsx'
import ReactDOM from 'react-dom'
import React from 'react'
import Root from './Root.tsx'

//creates the routes to the files
const router = createBrowserRouter([
  {
      path: '/',
      element: <Root />,
      children: [
          {
              index: true,
              element: <RootMenu />, //RootMenu is lowkey the main page
          },
          {
              path: 'PATHNAMEHERE',
              element: <FILENAMEHERE />,
          },
         //add more path & element per page you want to route to
        /**path is what is mentioned when defining link for LinkButton */
         
      ],
  },
]);

createRoot(document.getElementById('root')!).render(
<React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);