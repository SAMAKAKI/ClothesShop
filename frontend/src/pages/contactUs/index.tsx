import React from 'react'
import { FaGithub, FaInstagram, FaTelegram, FaTiktok, FaYoutube } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import styles from './contactUs.module.scss'

export const ContactUs: React.FC = () => {
  return (
    <div className='container mx-auto mt-[100px]'>
      <div className='flex justify-between items-center gap-5'>
        <div className="flex-1 bg-gradient-to-tr from-red-600 to-blue-500 p-[2px] rounded-2xl">
          <div className='rounded-2xl p-6 bg-zinc-800/90'>
            <h2 className='text-3xl font-bold text-white mb-4'>Get in Touch</h2>
            <div className='mb-4'>
              <h3 className='text-2xl font-medium text-white'>Phone:</h3>
              <p className='text-white text-xl mt-2'>Call us at: <strong><a href="tel:+48517832692">+48 517 832 692</a></strong></p>
              <p className='text-white text-xl mt-2'>Available Monday to Friday, 9 AM - 5 PM (EST)</p>
            </div>
            <div className='mb-4'>
              <h3 className='text-2xl font-medium text-white'>Email:</h3>
              <p className='text-white text-xl mt-2'>For inquiries, please email us at: <strong><a href="mailto:samakaki.shorick@gmail.com">samakaki.shorick@gmail.com</a></strong></p>
              <p className='text-white text-xl mt-2'>We aim to respond to all emails within 24 hours.</p>
            </div>
            <div className='mb-4'>
              <h3 className='text-2xl font-medium text-white'>Live Chat:</h3>
              <p className='text-white text-xl mt-2'>Chat with us directly on our website!</p>
            </div>
            <div className='mb-4'>
              <h3 className='text-2xl font-medium text-white'>Follow Us:</h3>
              <p className='text-white text-xl mt-2'>Stay updated with our latest collections and promotions by following us on social media:</p>
              <div className="flex items-center gap-6 mt-2">
                <Link to={'https://www.youtube.com/@samakaki'} className={`text-xl text-white flex items-center gap-2 ${styles.socialMediaLink}`}><FaYoutube className=''/>SAMAKAKI</Link>
                <Link to={'https://github.com/SAMAKAKI'} className={`text-xl text-white flex items-center gap-2 ${styles.socialMediaLink}`}><FaGithub />SAMAKAKI</Link>
                <Link to={'https://www.instagram.com/samakaki.cpp/'} className={`text-xl text-white flex items-center gap-2 ${styles.socialMediaLink}`}><FaInstagram />samakaki.cpp</Link>
                <Link to={'https://www.tiktok.com/@samakaki'} className={`text-xl text-white flex items-center gap-2 ${styles.socialMediaLink}`}><FaTiktok />samakaki</Link>
                <Link to={'https://t.me/samakaki_programming_channel'} className={`text-xl text-white flex items-center gap-2 ${styles.socialMediaLink}`}><FaTelegram />SAMAKAKI</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-tr from-red-600 to-blue-500 p-[2px] rounded-2xl">
          <div className='bg-zinc-800/90 rounded-2xl p-6'>
            <h3 className='text-3xl font-medium text-white mb-2'>Feedback:</h3>
            <p className='text-white text-xl mb-4'>Your opinion matters! If you have any suggestions or feedback on how we can improve, please let us know.</p>
            <form className='flex flex-col'>
              <input type='text' placeholder='Your Name' className='mb-2 p-2 bg-zinc-700 border border-zinc-800 text-white rounded-xl outline-none' required/>
              <input type='email' placeholder='Your Email' className='mb-2 p-2 bg-zinc-700 border border-zinc-800 text-white rounded-xl outline-none' required/>
              <textarea placeholder='Your Message' className='mb-2 p-2 bg-zinc-700 border border-zinc-800 text-white rounded-xl outline-none max-h-[262px] min-h-[262px]' required/>
              <button type='submit' className='bg-gradient-to-tr from-red-600 to-blue-500 text-white py-2 rounded-xl hover:scale-[1.02] transition-transform font-semibold'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
