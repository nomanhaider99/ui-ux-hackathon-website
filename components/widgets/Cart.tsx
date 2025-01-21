'use client'

import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import CartItem from '../ui/CartItem';
import { client } from '@/sanity/lib/client';
import { auth } from '@/auth';
import { OrderType } from '@/types/order';
import Link from 'next/link';

const Cart = () => {
  const [data, setData] = useState<OrderType[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState<string | null | undefined>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session = await auth();
      const userId = session?.user?.name;
      setUserId(userId);

      if (!userId) {
        setLoading(false);
        return;
      }

      const query = `*[_type == "order" && userId == $userId] {
        _id,
        productId,
        productName,
        price,
        category,
        imageUrl{
          asset {
            url
          }
        }
      }`;

      const orders: OrderType[] = await client.fetch(query, { userId });
      setData(orders);

      const calculatedSubtotal = orders.reduce((acc, item) => acc + item.price, 0);
      setSubtotal(calculatedSubtotal);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userId) {
    return <div>User not authenticated</div>;
  }

  return (
    <div className="w-full md:px-10 px-4 py-10 flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5 text-primarycolor">
        <div className="md:w-[70%] w-full flex flex-col gap-4">
          <div className="md:w-[717.33px] w-full p-2 bg-lightgray flex flex-col gap-2">
            <div className="text-[13px] leading-[14px] font-medium">Free Delivery</div>
            <div className="flex items-center gap-3 text-[11px]">
              <div>Applies to orders of ₹ 14 000.00 or more.</div>
              <div className="underline font-medium cursor-pointer">View details</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[22px] leading-[33px] font-medium">Bag</div>
            <div className="flex flex-col gap-2">
              {data.map((item, index) => (
                <CartItem
                  category={item.category}
                  image=""
                  price={item.price}
                  quantity={3}
                  size="L"
                  title={item.productName}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[21px] font-medium">Favourites</div>
            <div className="text-[15px]">There are no items saved to your favourites.</div>
          </div>
        </div>
        <div className="md:w-[30%] w-full flex flex-col gap-8">
          <div className="text-[21px] font-medium">Summary</div>
          <div className="flex flex-col gap-4">
            <div className="border-b-[0.5px] border-zinc-400 flex flex-col gap-1 text-[15px]">
              <div className="w-full flex justify-between items-center">
                <div>Subtotal</div>
                <div>₹ {subtotal}</div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div>Estimated Delivery & Handling</div>
                <div>Free</div>
              </div>
            </div>
            <div className="border-b-[0.5px] border-zinc-400 flex flex-col gap-1 text-[15px]">
              <div className="w-full flex justify-between items-center">
                <div>Total</div>
                <div>₹ {subtotal}</div>
              </div>
            </div>
          </div>
          <div>
            <Link href="/checkout">
              <Button text="Member Checkout" className="md:w-[30vw] w-full" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
