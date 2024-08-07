import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/Homepage';
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import DashboardPage from './routes/dashboard/DashboardPage';
import ChatPage from './routes/chatPage/ChatPage';
import SignInPage from './routes/signInPage/signInPage';
import SignUpPage from './routes/signUpPage/signUpPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path:"/sign-in/*",
        element: <SignInPage />
      },
      {
        path:"/sign-up/*",
        element: <SignUpPage />
      },
      {
        path:"/",
        element: <Homepage />
      },
      {
        element: <DashboardLayout />,
        children: [
            {
              path:"/dashboard",
              element: <DashboardPage />
            },
            {
              path:"/dashboard/chats/:id",
              element:<ChatPage />
            }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
