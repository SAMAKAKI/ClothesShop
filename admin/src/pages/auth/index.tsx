import React from 'react'

export const Auth: React.FC = () => {
  return (
    <div className='bg-zinc-800/90 h-screen w-full flex justify-center items-center gap-5'>
      <div className="bg-gradient-to-tr from-red-600 to-blue-500 w-1/4 rounded-3xl p-[2px]">
        <div className="bg-zinc-800/90 w-full h-full rounded-3xl px-4 py-10">
          <h2 className='text-white text-4xl font-bold flex items-center gap-2 justify-center'>Admin Panel</h2>
          <form className='flex flex-col justify-center items-center w-10/12 gap-4 mt-6 mx-auto'>
            <input type="email" name="email" placeholder='Email' className='hover:scale-105 transition-transform focus:scale-105 w-full text-xl font-semibold bg-zinc-700 text-white rounded-xl py-2 px-4 outline-none caret-red-600'/>
            <input type="password" name="password" placeholder='Password' className='hover:scale-105 transition-transform focus:scale-105 w-full text-xl font-semibold bg-zinc-700 text-white rounded-xl py-2 px-4 outline-none caret-red-600'/>
            <button className='text-white text-xl font-bold bg-gradient-to-tr from-red-600 to-blue-500 w-full py-2 rounded-xl hover:scale-105 transition-transform'>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  )
}
