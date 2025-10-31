"use client"
import { useState, useEffect } from "react";

// Fetching API data
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    // API used is the "Filter by main ingredient"
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || []; // Returns an empty array if no meals found
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealData = await fetchMealIdeas(ingredient);
    setMeals(mealData);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="flex flex-col items-center">
    <h2 className="text-2xl font-semibold mb-4 text-purple-600">
      Meal Ideas for "{ingredient || "..."}"
    </h2>

    {meals.length === 0 ? (
      <p className="text-gray-400 italic">No meal ideas found.</p>
    ) : (
      <ul className="space-y-4 w-full max-w-md">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="flex items-center bg-neutral-800 text-white rounded-xl shadow-md p-4 hover:bg-neutral-700 transition"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={80}
              height={80}
              className="rounded-lg mr-4"
            />
            <span className="text-lg font-medium">{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    )}
</div>
  );
}