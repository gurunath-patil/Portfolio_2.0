import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutPage from './components/pages/aboutPage.tsx'
import ResumePage from './components/pages/resumePage.tsx'
import PortfolioPage from './components/pages/portfolio.tsx'
import ContactPage from './components/pages/contactPage.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<AboutPage/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },
      {
        path:'/resume',
        element:<ResumePage/>
      },
      {
        path:'/portfolio',
        element:<PortfolioPage/>
      },
      {
        path:'/contact',
        element:<ContactPage/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
