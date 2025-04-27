'use client'

import { Button } from '@/components/ui/button'
import { supabase } from '@/services/superbaseClient'
import Image from 'next/image'
import React from 'react'

const Login = () => {
    
    const handleLoginWithGoogle = async () => {

        const {error} = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });

        if (error) {
            console.error('Error logging in with Google:', error.message);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center  border rounded-2xl p-8'>
                <div className='flex items-center justify-center gap-4 mb-3'>
                    <Image src={"/logo.png"} alt="logo" width={100} height={100} className='w-[64px]'/>
                    <span className='text-3xl font-bold'>NexSphere AI Interviewer</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src={"/login.png"} alt="logo" width={600} height={400} className='w-[450px] h-[300px] rounded-2xl'/>
                    <h2 className='text-2xl font-bold text-center mt-5'>Welcome to our AI Interviewer</h2>
                    <p className='text-gray-500 text-center'>Sign in with Google Authentication</p>
                    <Button className='mt-7 w-full cursor-pointer' onClick={handleLoginWithGoogle}>Login with Google</Button>
                </div>
            </div>
        </div>
    )
}

export default Login