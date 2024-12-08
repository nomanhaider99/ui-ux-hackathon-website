import React from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

const Register = () => {
    return (
        <div className='w-full flex justify-center items-center md:px-10 px-10 py-10'>
            <div className='w-[324px] flex flex-col items-center gap-2'>
                <div><Logo /></div>
                <div className='text-[22px] font-bold'>BECOME A NIKE MEMBER</div>
                <div className='text-[14px] text-center text-textgray'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</div>
                <div className='flex flex-col gap-2 items-center'>
                    <input
                        type="email"
                        className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                        placeholder='Email Address'
                    />
                    <input
                        type="password"
                        className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                        placeholder='Password'
                    />
                    <input
                        type="text"
                        className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                        placeholder='First Name'
                    />
                    <input
                        type="text"
                        className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                        placeholder='Last Name'
                    />
                    <input
                        type="text"
                        className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                        placeholder='Date of Birth'
                    />
                    <div className='text-[12px] text-textgray text-center'>Get a Nike Member Reward every year on your Birthday.</div>
                    <input
                        type="text"
                        className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-[324px]'
                        placeholder='India'
                    />
                    <div className='w-full flex items-center justify-between gap-2'>
                        <input
                            type="text"
                            className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-1/2 text-center'
                            placeholder='Male'
                        />
                        <input
                            type="text"
                            className='px-4 py-2 bg-white border-[0.5px] border-zinc-400 text-[16px] w-1/2 text-center'
                            placeholder='Female'
                        />
                    </div>
                    <div className='flex items-start gap-2'>
                        <input type="checkbox" name="" id="" className='mt-1' />
                        <div className='text-[12px] text-textgray'>Sign up for emails to get updates from Nike on products, offers and your Member benefits</div>
                    </div>
                    <div className='text-textgray text-[14px] text-center'>By logging in, you agree to Nike's <span className='font-medium underline'>Privacy Policy</span> <br /> and <span className='font-medium underline'>Terms of Use.</span></div>
                    <div>
                        <Button
                            text='JOIN US'
                            className='rounded w-[324px] text-[11px]'
                        />
                    </div>
                    <div className='text-[12px] text-textgray'>Already a Member? <span className='text-primarycolor underline cursor-pointer'>Sign In</span>.</div>
                </div>
            </div>
        </div>
    )
}

export default Register