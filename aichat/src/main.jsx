import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage';
import RootLayout from './layouts/rootLayout/RootLayout';
// import DashboardPage from './routes/dashboard/DashboardPage';
// import ChatPage from './routes/chatPage/ChatPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path:"/", element: <Homepage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
