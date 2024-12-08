'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ShoeProps {
    image: string,
    title: string,
    category: string,
    price: number,
    id: number
}

const Product: React.FC<ShoeProps> = ({
    category,
    image,
    price,
    title,
    id
}) => {
    return (
        <Link
            href={`/products/${id}`}
        >
            <div className='flex flex-col gap-2 w-[300px] h-[533px]'>
                {/* Image */}
                <div className=''>
                    <Image
                        alt=''
                        src={image}
                        width={300}
                        height={300}
                        className='w-[300] h-[300px]'
                    />
                </div>
                {/* Texts */}
                <div className='flex flex-col'>
                    <div className='text-[15px] font-medium text-crimson'>Just In</div>
                    <div className='flex justify-between items-center'>
                        <div className='text-[15px] font-medium leading-[24px]'>{title}</div>
                        <div className='text-[15px] font-medium leading-[24px]'>₹{price}</div>
                    </div>
                    <div className='text-[15px] leading-[24px] text-textgray'>{category}</div>
                </div>
            </div>
        </Link>
    )
}

export default Product