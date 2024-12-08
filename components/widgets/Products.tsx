import Image from 'next/image'
import React from 'react'
import Filter from '@/public/images/Filters.png'
import Cateogories from '../ui/Cateogories'
import FilterController from '../ui/FilterController'
import { IoIosArrowDown } from 'react-icons/io'
import { products } from '@/data/products'
import Product from '../ui/Product'


const Products = () => {
    return (
        <div className='w-full flex flex-col gap-4 md:px-10 px-4 py-10 over'>
            <div className='flex items-center w-full justify-between text-primarycolor'>
                <div className='text-[24px] '>New (500)</div>
                <div className='md:flex hidden items-center gap-6 text-[16px]'>
                    <div className='flex items-center gap-1'>
                        <div>Hide Filters</div>
                        <div>
                            <Image
                                alt=''
                                src={Filter}
                                width={24}
                                height={24}
                                className='w-[24px] h-[24px]'
                            />
                        </div>
                    </div>
                    <div className='flex items-center gap-1'>
                        <div>Sort By</div>
                        <div>
                            <IoIosArrowDown
                                size={24}
                                color='#000'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className='w-[20%] md:flex hidden flex-col gap-6'>
                    <div>
                        <Cateogories />
                    </div>
                    <div>
                        <FilterController
                            items={["Men", "Women"]}
                            title='Gender'
                        />
                    </div>
                    <div>
                        <FilterController
                            items={["Boys", "Girls"]}
                            title='Kids'
                        />
                    </div>
                    <div>
                        <FilterController
                            items={["Under ₹ 2500.00", "₹ 2501.00 - ₹"]}
                            title='Shop By Price'
                        />
                    </div>
                </div>
                <div className='md:w-[80%] w-full grid grid-cols-1 md:grid-cols-3 gap-2'>
                    {
                        products.map((item, index) => (
                            <Product
                                category={item.category}
                                image={item.image as any}
                                price={item.price}
                                title={item.title}
                                id={item.id}
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products