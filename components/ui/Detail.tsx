import Image from 'next/image'
import React from 'react'
import Button from './Button'

interface DetailProps {
    image: string,
    title: string,
    description: string,
    price: number
}

const Detail: React.FC<DetailProps> = ({
    description,
    image,
    price,
    title
}) => {
  return (
    <div className='w-full flex flex-col md:flex-row justify-between gap-10'>
        <div className='md:w-1/2'>
            <Image
                alt=''
                src={image}
                width={653}
                height={653}
                className='md:w-[653px] w-full md:h-[653px]'
             />
        </div>
        <div className='md:w-1/2 w-full flex flex-col gap-3 text-primarycolor'>
            <div className='text-[48px] leading-[48px] font-medium'>{title}</div>
            <div className='text-[15px] leading-[28px]'>{description}</div>
            <div className='text-[36px] font-medium'>₹ {price}</div>
            <div>
                <Button
                    text='Add to Cart'
                    className='w-full md:w-[15vw]'
                 />
            </div>
        </div>
    </div> 
  )
}

export default Detail