import React from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

const Login = () => {
  return (
    <div className='w-full flex justify-center items-center px-10 md:py-10 py-3'>
        <div className='flex flex-col items-center gap-4 text-primarycolor'>
            <div><Logo /></div>
            <div className='text-[22px] font-bold text-center'>YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE</div>
            <div className='flex flex-col gap-2'>
                <input 
                    type="text" 
                    className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                    placeholder='Email Address'
                />
                <input 
                    type="password" 
                    className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                    placeholder='Password'
                />
            </div>
            <div className='w-[324px] flex justify-between items-center'>
                <div className='flex items-center gap-2 text-textgray text-[12px]'>
                    <div><input type="checkbox" name="" id="" /></div>
                    <div>Keep me signed in </div>
                </div>
                <div className='text-textgray text-[12px]'>Forgotten your password?</div>
            </div>
            <div className='text-textgray text-[12px] text-center'>By logging in, you agree to Nike's <span className='font-medium underline'>Privacy Policy</span> <br /> and <span className='font-medium underline'>Terms of Use.</span></div>
            <div>
                <Button
                    text='SIGN IN'
                    className='rounded w-[324px] text-[11px]'
                 />
            </div>
            <div className='text-[12px] text-textgray'>Not a Member? <span className='text-primarycolor underline cursor-pointer'>Join Us</span>.</div>
        </div>
    </div>
  )
}

export default Login