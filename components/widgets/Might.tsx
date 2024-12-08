import React from 'react'
import Product from '../ui/Product'
import Shoe from '@/public/images/Shoe5.png'

const Might = () => {
  return (
    <div className='w-full md:px-10 px-4 py-10 flex flex-col gap-4'>
        <div className='font-medium text-[23px] leading-[33px]'>You Might Also Like</div>
        <div>
            <Product
                category="Men's Shoes"
                id={1}
                image={Shoe as any}
                price={12295.00}
                title='Air Jordan 1 Mid SE Craft'
             />
        </div>
    </div>
  )
}

export default Might