"use client"
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-4 m-auto-4 items-center gap-2">
        <p className="m-auto font-semibold">Sort by:</p>
        <button className="bg-blue-500 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded" type="button" onClick={() => setSortBy("name")} disabled={sortBy === "name"}>
          Name
        </button>
        <button className="bg-blue-500 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded" type="button"onClick={() => setSortBy("category")} disabled={sortBy === "category"}>
          Category
        </button>
      </div>
      <ul className="space-y-2">
            {sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect && onItemSelect(item)}
              />
            ))}
          </ul>
    </div> 
  );
}