"use client"
import { useState } from "react";
import NewItem from "../week-7/new-item";
import ItemList from "../week-7/item-list";
import itemsData from "../week-7/items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="flex flex-col items-center bg-black rounded-xl p-6 mb-4">
      <h1 className="flex justify-center bg-neutral-800 text-white rounded-xl p-6 mb-4 w-100 font-bold"
      >Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
    </main>
  );
}