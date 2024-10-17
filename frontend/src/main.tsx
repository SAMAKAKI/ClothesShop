import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layouts'
import { About, Auth, ContactUs, Home, ProductPage, Shop } from './pages'

const router = createBrowserRouter([
  {path: '/', element: <MainLayout />, children: [
    {path: '/', element: <Home/>},
    {path: '/shop', element: <Shop/>},
    {path: '/shop/:slug', element: <ProductPage />},
    {path: '/about', element: <About/>},
    {path: '/contact-us', element: <ContactUs/>},
  ]},
  {path: '/auth', element: <Auth/>},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
