import React, { useContext } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ADD_ORDER } from "../api/gql/mutation/addOrder";

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [createOrder] = useMutation(ADD_ORDER, {
    update(cache, { data: { addOrder } }) {
      cache.modify({
        fields: {
          orders(existingData = []) {
            return [...existingData, ...addOrder];
          },
        },
      });
    },
    onCompleted: () => {
      clearCart();
      navigate("/orders");
    },
  });

  function clearTypename(arr: any[]) {
    return arr.map((obj) => {
      const { __typename, image, price, amount = 1, ...rest } = obj;
      return { amount: 1, ...rest };
    });
  }

  const handleCheckout = () => {
    createOrder({
      variables: {
        order: clearTypename(cart),
      },
    });
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((pizza) => (
          <li key={pizza.id}>
            {pizza.name} - ${pizza.price}
            <button onClick={() => removeFromCart(pizza)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
