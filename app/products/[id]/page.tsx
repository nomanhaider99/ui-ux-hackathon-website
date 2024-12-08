import Detail from '@/components/ui/Detail'
import { products } from '@/data/products'
import React from 'react'

interface IParams {
    params: {
        id: number
    }
}

const page = ({ params }: IParams) => {
    const foundProduct = products.find((item) => {
        return item.id == params.id
    });
  return (
    <div className='md:px-10 px-4 py-10 w-full'>
        <Detail
            description={foundProduct?.description!}
            image={foundProduct?.image as any}
            price={foundProduct?.price!}
            title={foundProduct?.title!}
         />
    </div>
  )
}

export default page