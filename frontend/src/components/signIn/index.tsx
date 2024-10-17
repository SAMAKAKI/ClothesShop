import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaApple, FaGithub, FaSign } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FiExternalLink } from 'react-icons/fi'
import { MdFollowTheSigns } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface SignInProps {
  setTab: (value: string) => void
}

export const SignIn: React.FC<SignInProps> = ({setTab}) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className="rounded-2xl overflow-hidden flex-1 h-full">
        <img src="/sign-in.png" alt=""/>
      </div>
      <div className="flex-1">
        <h2 className='text-white text-4xl font-bold flex items-center gap-2 justify-center'>Sign In <FaSign /></h2>
        <form className='flex flex-col justify-center items-center w-10/12 gap-4 mt-6 mx-auto'>
          <input type="text" name="usernameOrEmail" placeholder='Username or Email' className='hover:scale-105 transition-transform focus:scale-105 w-full text-xl font-semibold bg-zinc-700 text-white rounded-xl py-2 px-4 outline-none caret-red-600'/>
          <input type="password" name="password" placeholder='Password' className='hover:scale-105 transition-transform focus:scale-105 w-full text-xl font-semibold bg-zinc-700 text-white rounded-xl py-2 px-4 outline-none caret-red-600'/>
          <div className="flex flex-col w-full">
            <div className="flex w-full justify-between items-center text-md text-white font-semibold">
              <p>Forgot password?</p>
              <Link to={''} className='flex items-center gap-2 text-blue-500'>Help <FiExternalLink /></Link>
            </div>
            <div className="flex w-full justify-between items-center text-md text-white font-semibold">
              <p>Don't have an account yet?</p>
              <Link to={''} className='flex items-center gap-2 text-blue-500' onClick={() => setTab('sign-up')}>Sign Up <MdFollowTheSigns /></Link>
            </div>
          </div>
          <button className='text-white text-xl font-bold bg-gradient-to-tr from-red-600 to-blue-500 w-full py-2 rounded-xl hover:scale-105 transition-transform'>Sign In</button>
          <div className="flex w-full justify-between items-center gap-3">
            <div className="flex-1 h-0.5 bg-gradient-to-tr from-red-600 to-blue-500 rounded-2xl"></div>
            <p className='text-white'>Or sign in with</p>
            <div className="flex-1 h-0.5 bg-gradient-to-tr from-red-600 to-blue-500 rounded-2xl"></div>
          </div>
          <div className="flex w-full justify-between items-center gap-3 text-2xl">
            <button className="rounded-2xl p-[2px] bg-gradient-to-tr from-red-600 to-blue-500 hover:scale-105 transition-transform">
              <div className="p-4 rounded-2xl bg-zinc-800/90">
                <FcGoogle />
              </div>
            </button>
            <button className="rounded-2xl p-[2px] bg-gradient-to-tr from-red-600 to-blue-500 hover:scale-105 transition-transform">
              <div className="p-4 rounded-2xl bg-zinc-800/90">
                <FaApple className='text-white'/>
              </div>
            </button>
            <button className="rounded-2xl p-[2px] bg-gradient-to-tr from-red-600 to-blue-500 hover:scale-105 transition-transform">
              <div className="p-4 rounded-2xl bg-zinc-800/90">
                <BsFacebook className='text-blue-500'/>
              </div>
            </button>
            <button className="rounded-2xl p-[2px] bg-gradient-to-tr from-red-600 to-blue-500 hover:scale-105 transition-transform">
              <div className="p-4 rounded-2xl bg-zinc-800/90">
                <FaGithub className='text-zinc-950'/>
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
