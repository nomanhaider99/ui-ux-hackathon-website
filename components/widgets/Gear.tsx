import Image from 'next/image'
import React from 'react'
import LeftArrow from '@/public/images/LeftArrow.png'
import RightArrow from '@/public/images/RightArrow.png'
import { ProductType } from '@/types/product'
import { client } from '@/sanity/lib/client'
import Product from '../ui/Product'

const Gear = async () => {
    const query = `
            *[_type == "product" && (status == "Just In")] {
        _id,
        productName,
        category,
        price,
        inventory,
        colors,
        status,
        "imageUrl": image.asset->url,
        description
        }
        `
    const data: ProductType[] = await client.fetch(query);

    return (
        <div className='w-full text-primarycolor overflow-hidden flex flex-col gap-4 px-4 md:px-10 py-10'>
            {/* Heading */}
            <div className='text-[23px] leading-[28px] font-medium'>Just In Products</div>
            {/* Cards and Controllers */}
            <div className='flex flex-col gap-1'>
                {/* Cards */}
                <div className='flex flex-col items-center'>
                    <div className='grid grid-cols-3 gap-4'>
                        {
                            data.map((item, index) => (
                                <Product
                                    category={item.category}
                                    id={item._id}
                                    image={item.imageUrl as any}
                                    price={item.price}
                                    title={item.productName}
                                    status={item.status}
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