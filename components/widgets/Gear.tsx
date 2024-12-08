import Image from 'next/image'
import React from 'react'
import LeftArrow from '@/public/images/LeftArrow.png'
import RightArrow from '@/public/images/RightArrow.png'
import { gears1, gears2 } from '@/data/gears'
import GearCard from '../ui/GearCard'

const Gear = () => {
  return (
    <div className='w-full text-primarycolor overflow-hidden flex flex-col gap-4 px-4 md:px-10 py-10'>
        {/* Heading */}
        <div className='text-[23px] leading-[28px] font-medium'>Gear Up</div>
        {/* Cards and Controllers */}
        <div className='flex flex-col gap-1'>
            {/* Controllers */}
            <div className='w-full md:flex hidden items-center'>
                <div className='w-1/4'></div>
                <div className='w-1/4 flex items-center justify-center gap-2'>
                    <div className='text-[15px] leading-[24px] font-medium'>Shop Men's</div>
                    <div className='flex items-center gap-1'>
                        <div>
                            <Image
                                alt=''
                                src={LeftArrow}
                                width={48}
                                height={48}
                                className='h-[48px] w-[48px]'
                             />
                        </div>
                        <div>
                            <Image
                                alt=''
                                src={RightArrow}
                                width={48}
                                height={48}
                                className='h-[48px] w-[48px]'
                             />
                        </div>
                    </div>
                </div>
                <div className='w-1/4'></div>
                <div className='w-1/4 flex items-center justify-center gap-2'>
                    <div className='text-[15px] leading-[24px] font-medium'>Shop Men's</div>
                    <div className='flex items-center gap-1'>
                        <div>
                            <Image
                                alt=''
                                src={LeftArrow}
                                width={48}
                                height={48}
                                className='h-[48px] w-[48px]'
                             />
                        </div>
                        <div>
                            <Image
                                alt=''
                                src={RightArrow}
                                width={48}
                                height={48}
                                className='h-[48px] w-[48px]'
                             />
                        </div>
                    </div>
                </div>
            </div>
            {/* Cards */}
            <div className='flex flex-col md:flex-row items-center gap-4'>
                <div className='flex md:flex-row flex-col items-center gap-1'>
                    {
                        gears1.map((item, index) => (
                            <GearCard
                                category={item.category}
                                image={item.image as any}
                                price={item.price}
                                title={item.title}
                                key={index}
                             />
                        ))
                    }
                </div>                
                <div className='flex md:flex-row flex-col items-center gap-1'>
                    {
                        gears2.map((item, index) => (
                            <GearCard
                                category={item.category}
                                image={item.image as any}
                                price={item.price}
                                title={item.title}
                                key={index}
                             />
                        ))
                    }
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Gear