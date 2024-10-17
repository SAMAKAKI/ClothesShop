import React from 'react'
import styles from './header.module.scss'
import { IoCartOutline, IoStarOutline } from 'react-icons/io5'
import { VscAccount } from 'react-icons/vsc'
import { Link, useLocation } from 'react-router-dom'

export const Header: React.FC = () => {
  const location = useLocation()
  
  return (
    <div className='w-11/12 left-1/2 -translate-x-1/2 rounded-3xl mt-5 px-10 flex justify-between items-center bg-zinc-800/50 backdrop-blur-[2px] fixed z-50'>
      <h1 className={`${styles.logo}`}>SAMAKAKI</h1>
      <div className='flex justify-center items-center gap-10 text-xl text-white capitalize'>
        <Link to={'/'} className={`${location.pathname === '/' ? styles.menuItemActive : styles.menuItem}`}>home</Link>
        <Link to={'/shop'} className={`${location.pathname === '/shop' ? styles.menuItemActive : styles.menuItem}`}>Shop</Link>
        <Link to={'/about'} className={`${location.pathname === '/about' ? styles.menuItemActive : styles.menuItem}`}>About</Link>
        <Link to={'/contact-us'} className={`${location.pathname === '/contact-us' ? styles.menuItemActive : styles.menuItem}`}>Contact Us</Link>
      </div>
      { false ? (
        <div className='flex justify-center gap-8 items-center text-white text-3xl'>
          <IoStarOutline />
          <IoCartOutline />
          <VscAccount />
        </div>
      ) : (
        <Link to={'/auth'} className='w-[120px] bg-gradient-to-tr from-red-500 to-blue-700 flex justify-center items-center py-1 rounded-xl text-white text-xl font-semibold hover:scale-110 transition-transform duration-75 ease-in'>Sign In</Link>
      ) }
    </div>
  )
}
