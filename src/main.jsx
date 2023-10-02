import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './routes/App.jsx'
import Imagery from './routes/Imagery.jsx'
import Dev from './routes/Dev.jsx'
import NotFound from './routes/NotFound.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <App />},
    {path: '/imagery', element: <Imagery />},
    {path: '/dev', element: <Dev />},
    {path: '*', element: <NotFound />},
  ]},
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
