import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../components'

export const MainLayout: React.FC = () => {
  return (
    <div className="overflow-y-auto h-screen w-full bg-zinc-800/90">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
