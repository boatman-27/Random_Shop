import { useState } from "react";
import { useNavigate } from "react-router";

function SearchByOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by order ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus: w-28 rounded-full bg-yellow-200 px-4 py-2 text-sm outline-none transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchByOrder;
