'use client'

import React, { useEffect, useState } from 'react';
import Cart from './Cart';

const CartWrapper = () => {
  const [cartElement, setCartElement] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const loadCart = async () => {
      const element = await Cart();
      setCartElement(element);
    };

    loadCart();
  }, []);

  return cartElement || <div>Loading...</div>;
};

export default CartWrapper;
