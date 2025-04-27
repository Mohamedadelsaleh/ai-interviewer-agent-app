'use client'

import { useUserDetailsContext } from '@/app/Provider'
import Image from 'next/image';
import React from 'react'

function WelcomeContainer() {

    const { user } = useUserDetailsContext();
    console.log(user);
    

  return (
    <div className=' bg-white rounded-xl p-5 flex justify-between items-center'>
        <div>
            <h2 className='text-lg font-bold'>Welcome Back, {user?.name}</h2>
            <h2 className='text-gray-500' >AI-Driven Interviews, Hassle-Free Hiring </h2>
        </div>
      {user && <Image src={user?.picture} alt="userAvatar" width={50} height={50} className='rounded-full' />}
    </div>
  )
}

export default WelcomeContainer