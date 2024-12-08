import React from 'react'
import Button from '../ui/Button'
import CartItem from '../ui/CartItem'
import DriFit from '@/public/images/DriFit1.png'
import Shoes from '@/public/images/Shoe4.png'

const Cart = () => {
  return (
    <div className='w-full md:px-10 px-4 py-10 flex justify-center items-center'>
        <div className='flex flex-col md:flex-row gap-5 text-primarycolor'>
            <div className='md:w-[70%] w-full flex flex-col gap-4'>
                <div className='md:w-[717.33px] w-full p-2 bg-lightgray flex flex-col gap-2'>
                    <div className='text-[13px] leading-[14px] font-medium'>Free Delivery</div>
                    <div className='flex items-center gap-3 text-[11px]'>
                        <div>Applies to orders of ₹ 14 000.00 or more.</div>
                        <div className='underline font-medium cursor-pointer'>View details</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-[22px] leading-[33px] font-medium'>Bag</div>
                    <div className='flex flex-col gap-2'>
                        <CartItem
                            category="Men's Short-Sleeve Running Top"
                            image={DriFit as any}
                            price={2599.99}
                            quantity={3}
                            size='L'
                            title='Nike Dri-FIT ADV TechKnit Ultra'
                         />
                        <CartItem
                            category="Men's Shoes"
                            image={Shoes as any}
                            price={910.99}
                            quantity={1}
                            size='8'
                            title='Nike Air Max 97 SE'
                         />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='text-[21px] font-medium'>Favourites</div>
                    <div className='text-[15px]'>There are no items saved to your favourites.</div>
                </div>
            </div>
            <div className='md:w-[30%] w-full flex flex-col gap-8'>
                <div className='text-[21px] font-medium'>Summary</div>
                <div className='flex flex-col gap-4'>
                    <div className='border-b-[0.5px] border-zinc-400 flex flex-col gap-1 text-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <div>Subtotal</div>
                            <div>₹ 20 890.00</div>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div>Estimated Delivery & Handling</div>
                            <div>Free</div>
                        </div>
                    </div>
                    <div className='border-b-[0.5px] border-zinc-400 flex flex-col gap-1 text-[15px]'>
                        <div className='w-full flex justify-between items-center'>
                            <div>Total</div>
                            <div>₹ 20 890.00</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Button
                        text='Member Checkout'
                        className='md:w-[30vw] w-full'
                     />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart