export default function Item({ name, quantity, category}) {
  return (
    <div className="flex justify-center">
      <ul className="bg-neutral-800 p-6 mb-4 w-80 space-y-2 text-center rounded-xl">
        <li className="text-lg font-semibold text-purple-800 capitalize">
            {name}
        </li>
        <li className="text-white-600 font-medium">
          Quantity: {quantity}
        </li>
        <li className="text-white-500 italic capitalize">
          Category: {category}
        </li>
      </ul>
    </div>
  );
}