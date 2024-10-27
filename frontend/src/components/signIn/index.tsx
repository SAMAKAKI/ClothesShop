import axios from 'axios'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BsFacebook } from 'react-icons/bs'
import { FaApple, FaGithub, FaSign } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FiExternalLink } from 'react-icons/fi'
import { MdFollowTheSigns } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface SignInProps {
  setTab: (value: string) => void
}

interface SignInForm {
  email: string
  password: string
}

export const SignIn: React.FC<SignInProps> = ({setTab}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInForm>()

  const submit: SubmitHandler<SignInForm> = async (data) => {
    await axios.post('http://localhost:3000/api/users/sign-in', data).then((res) => {
      console.log(res.data);
    }).catch((err) => {
      console.log(err?.response?.data);
    })
  }

  return ( 
    <div className='w-full h-full flex justify-center items-center'>
      <div className="rounded-2xl overflow-hidden flex-1 h-full">
        <img src="/sign-in.png" alt=""/>
      </div>
      <div className="flex-1">
        <h2 className='text-white text-4xl font-bold flex items-center gap-2 justify-center'>Sign In <FaSign /></h2>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col justify-center items-center w-10/12 gap-4 mt-6 mx-auto'>
          <input {...register('email', {required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} type="email" placeholder='Email' className='hover:scale-105 transition-transform focus:scale-105 w-full text-xl font-semibold bg-zinc-700 text-white rounded-xl py-2 px-4 outline-none caret-red-600'/>
          <input {...register('password', {required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-.]).{8,}$/})} type="password" placeholder='Password' className='hover:scale-105 transition-transform focus:scale-105 w-full text-xl font-semibold bg-zinc-700 text-white rounded-xl py-2 px-4 outline-none caret-red-600'/>
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
          <button type='submit' className='text-white text-xl font-bold bg-gradient-to-tr from-red-600 to-blue-500 w-full py-2 rounded-xl hover:scale-105 transition-transform'>Sign In</button>
        </form>
        <div className="flex w-10/12 mt-4 mx-auto justify-between items-center gap-3">
          <div className="flex-1 h-0.5 bg-gradient-to-tr from-red-600 to-blue-500 rounded-2xl"></div>
          <p className='text-white'>Or sign in with</p>
          <div className="flex-1 h-0.5 bg-gradient-to-tr from-red-600 to-blue-500 rounded-2xl"></div>
        </div>
        <div className="flex w-10/12 mt-4 mx-auto justify-between items-center gap-3 text-2xl">
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
      </div>
    </div>
  )
}
