import React from "react";
import { Pizza } from "../context/CartContext";

interface PizzaCardProps {
  pizza: Pizza;
  addToCart: (item: Pizza) => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, addToCart }) => {
  const { name, amount, price, image } = pizza;

  return (
    <div>
      <img src={image} alt={name} />
      <>
        <h2>{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Amount: {amount}</p>
        <button onClick={() => addToCart(pizza)}>Add to Cart</button>
      </>
    </div>
  );
};

export default PizzaCard;
