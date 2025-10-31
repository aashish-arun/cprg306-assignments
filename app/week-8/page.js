"use client"
import { useState } from "react";
import NewItem from "../week-8/new-item";
import ItemList from "../week-8/item-list";
import itemsData from "../week-8/items.json";
import MealIdeas from "../week-8/meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    if (!item || !item.name) return;

    // Removing emoji, commas, etc.
    const nameCleaned = item.name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
      .trim()
      .toLowerCase();

    setSelectedItemName(nameCleaned);
  };
  
  return (
    <main className="flex flex-col items-center bg-black rounded-xl p-6 mb-4">
      <h1 className="flex justify-center bg-neutral-800 text-white rounded-xl p-6 mb-4 w-100 font-bold">
        Shopping List
      </h1>

      <div className="flex flex-row gap-8">
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}