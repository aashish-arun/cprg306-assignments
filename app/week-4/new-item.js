"use client"
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(quantity);
    }
  };

  return (
    <div className="bg-grey text-white font-bold py-2 px-4 mx rounded">
        <p>Count: {quantity}</p>
        <button className="bg-blue-500 disabled:bg-gray-400 text-white font-bold py-2 px-4 ml-2 rounded" onClick={decrement} disabled={quantity == 1}>Decrement</button>
        <button className="bg-blue-500 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded" onClick={increment} disabled={quantity == 20}>Increment</button>
    </div> 
  );
}