"use client"
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getItems, addItem } from "../services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  
  useEffect(() => {
    if (user === null) {
      router.push("/week-10");
    }
  }, [user, router]);

  // Load item after hook are defined
  useEffect(() => {
    if (!user?.uid) return;

    async function loadItems() {
      const results = await getItems(user.uid);
      setItems(results);
    }

    loadItems();
  }, [user]);

  // While checking auth state or redirecting, prevent UI flicker, otherwise will get an next error.
  if (user === null) {
    return null; 
  }

  const handleAddItem = async (newItem) => {
    if (!user?.uid) return;
    const id = await addItem(user.uid, newItem);
    setItems((prevItems) => [...prevItems, { id, ...newItem }]);
  };

  /*
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
  */

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