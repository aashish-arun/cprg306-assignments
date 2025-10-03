import NewItem from "../week-4/new-item";

export default function Page() {
  return (
    <main className="flex flex-col items-center bg-black rounded-xl p-6 mb-4">
      <h1 className="flex justify-center bg-neutral-800 text-white rounded-xl p-6 mb-4 w-100 font-bold"
      >Shopping List</h1>
      <div><NewItem /></div>
    </main>
  );
}