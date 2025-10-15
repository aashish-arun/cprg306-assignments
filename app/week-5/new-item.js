"use client"
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

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

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  // Forgot to log an item object & reset the values, only found out about it after I feed the code and requirments to AI.
  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
}; 

  return (
    <div className="flex bg-neutral-800 text-white font-bold p-1.5 m-auto rounded">
      <form onSubmit={handleSubmit} className="flex flex-col items-left">

        <label className="flex flex-col items-left">Item Name:
          <input className="ml-2 p-2 bg-white text-black rounded" type="text" id="name" name="name" placeholder="Enter your item name" required value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        

        <label className="flex flex-col items-left">Quantity: (1–20 )
          <div className="p-1 m-1 rounded">
            <p>Current: {quantity}</p>
            <div className="flex flex-row gap-5">
              <button className="bg-blue-500 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded" type="button" onClick={decrement} disabled={quantity == 1}>-</button>
              <button className="bg-blue-500 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded" type="button" onClick={increment} disabled={quantity == 20}>+</button>
            </div>
          </div>
        </label>
    
        <label className="flex flex-col items-left">Category
          <select className="ml-2 p-2 bg-white text-black rounded" id="category" name="category" value={category} onChange={handleChange} required >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </label>

        <button type="submit" className="bg-blue-500 disabled:bg-gray-400 text-white font-bold p-2 m-auto rounded">Add Item</button>
      </form>
    </div>
  );
}