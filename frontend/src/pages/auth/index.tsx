import React, { useState } from 'react'
import { SignIn, SignUp } from '../../components'
import { MdFollowTheSigns } from 'react-icons/md'
import { FaHome, FaSign } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Auth: React.FC = () => {
  const [tab, setTab] = useState<string>('sign-in')

  return (
    <div className='bg-zinc-800/90 h-screen w-full flex justify-center items-center gap-5'>
      <div className="bg-gradient-to-tr from-red-600 to-blue-500 w-1/2 h-2/3 rounded-3xl p-[2px]">
        <div className="bg-zinc-800/90 w-full h-full rounded-3xl p-4">
          { tab === 'sign-in' ? <SignIn setTab={setTab}/> : <SignUp setTab={setTab}/>}
        </div>
      </div>
      <div className="flex flex-col h-1/2 justify-between">
        <Link to={'/'} className="w-[56px] h-[56px] flex justify-center items-center bg-zinc-800/90 rounded-2xl z-10 text-white text-2xl"><FaHome /></Link>
        <div className="flex flex-col text-white text-2xl gap-5 relative p-[2px]">
          <div className={`${tab === 'sign-in' ? 'translate-y-0' : 'translate-y-[76px]'} absolute left-0 top-0 bg-gradient-to-tr from-red-600 to-blue-500 w-[60px] h-[60px] rounded-2xl transition-all duration-300 ease-in-out transform`}></div>
          <button onClick={() => setTab('sign-in')} className="w-[56px] h-[56px] flex justify-center items-center bg-zinc-800/90 rounded-2xl z-10"><FaSign /></button>
          <button onClick={() => setTab('sign-up')} className="w-[56px] h-[56px] flex justify-center items-center bg-zinc-800/90 rounded-2xl z-10"><MdFollowTheSigns /></button>
        </div>
      </div>
    </div>
  )
}
