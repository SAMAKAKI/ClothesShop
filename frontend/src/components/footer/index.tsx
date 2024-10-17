import React from 'react'
import { Colleagues } from '../colleagues'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaTelegram, FaTiktok, FaYoutube } from 'react-icons/fa6'

export const Footer: React.FC = () => {
  return (
    <>
      <Colleagues />
      <div className="border-t-2 border-white w-11/12 mx-auto"></div>
      <div className="container mx-auto my-10">
        <div className="flex justify-between items-center">
          <h3 className={`${styles.logo}`}>SAMAKAKI&reg;</h3>
          <p className='text-white text-2xl'>Clothes Shop</p>
        </div>
        <div className="flex justify-between items-start mt-5">
          <div className="flex flex-col justify-start gap-y-2">
            <p className='text-xl text-white font-semibold uppercase mb-3'>Menu</p>
            <Link to={'/'} className='text-xl text-white'>Home</Link>
            <Link to={'/shop'} className='text-xl text-white'>Shop</Link>
            <Link to={'/about'} className='text-xl text-white'>About</Link>
            <Link to={'/contact-us'} className='text-xl text-white'>Contact us</Link>
            <Link to={'/auth'} className='text-xl text-white'>Sign In</Link>
            {/* TODO if user has been signed in, change link sign in to profile, orders, cart and e.t.c */}
          </div>
          <div className="flex flex-col justify-start gap-y-2">
            <p className='text-xl text-white font-semibold uppercase mb-3'>Social Media</p>
            <Link to={'https://www.youtube.com/@samakaki'} className='text-xl text-white flex items-center gap-2'><FaYoutube className=''/>SAMAKAKI</Link>
            <Link to={'https://github.com/SAMAKAKI'} className='text-xl text-white flex items-center gap-2'><FaGithub />SAMAKAKI</Link>
            <Link to={'https://www.instagram.com/samakaki.cpp/'} className='text-xl text-white flex items-center gap-2'><FaInstagram />samakaki.cpp</Link>
            <Link to={'https://www.tiktok.com/@samakaki'} className='text-xl text-white flex items-center gap-2'><FaTiktok />samakaki</Link>
            <Link to={'https://t.me/samakaki_programming_channel'} className='text-xl text-white flex items-center gap-2'><FaTelegram />SAMAKAKI</Link>
          </div>
          <div className="flex flex-col justify-start gap-y-2">
            <p className='text-xl text-white font-semibold uppercase mb-3'>Contact Info</p>
            <a target='_blank' href="mailto:samakaki.shorick@gmail.com" className='text-xl text-white flex items-center gap-2'>Email: samakaki.shorick@gmail.com</a>
            <a href="tel:+48517832692" className='text-xl text-white flex items-center gap-2'>Phone: +48 517 832 692</a>
          </div>
          <div className="flex flex-col justify-start gap-y-2">
            <p className='text-xl text-white font-semibold uppercase mb-3'>Quick Links</p>
            <Link to={'/terms'} className='text-xl text-white'>Terms & Conditions</Link>
            <Link to={'/privacy'} className='text-xl text-white'>Privacy Policy</Link>
            <Link to={'/return'} className='text-xl text-white'>Return Policy</Link>
          </div>
          <div className="flex flex-col justify-start gap-y-2">
            <p className='text-xl text-white font-semibold uppercase mb-3'>Newsletter Subscription</p>
            <form className="flex flex-col gap-2">
              <label className="text-white text-xl">Subscribe to our newsletter</label>
              <input type="email" placeholder="Enter your email" className="px-3 py-2 rounded-md" />
              <button type="submit" className="bg-gradient-to-tr from-red-600 to-blue-500 text-white py-2 rounded-xl tra">Subscribe</button>
            </form>
          </div>
        </div>
        <p className="text-white text-center text-sm mt-5">© 2024 SAMAKAKI. All rights reserved.</p>
      </div>
    </>
  )
}
