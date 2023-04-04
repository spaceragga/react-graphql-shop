import React, { createContext, useState } from "react";

interface CartContextProps {
  cart: Pizza[];
  orders: Pizza[];
  addToCart: (item: Pizza) => void;
  addOrder: (item: Pizza[]) => void;
  removeFromCart: (item: Pizza) => void;
  clearCart: () => void;
}

type Props = {
  children?: React.ReactNode;
};

export interface Pizza {
  id: string;
  name: string;
  image?: string;
  amount?: number;
  price: number;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  orders: [],
  addToCart: () => {},
  addOrder: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

const CartContextProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Pizza[]>([]);
  const [orders, setOrders] = useState<Pizza[]>([]);

  const addToCart = (item: Pizza) => {
    setCart([...cart, item]);
  };

  const addOrder = (item: Pizza[]) => {
    setOrders((prev) => [...prev, ...item]);
  };

  const removeFromCart = (item: Pizza) => {
    setCart(cart.filter((i) => i !== item));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, orders, addToCart, addOrder, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
