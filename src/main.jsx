import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './routes/App.jsx'
import Imagery from './routes/Imagery'
import RootLayout from './routes/RootLayout'
import Dev from './components/Dev'

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children: [
    {path: '/', element: <App />},
    {path: '/imagery', element: <Imagery />},
    {path: '/dev', element: <Dev />}
  ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
