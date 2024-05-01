import { NavLink } from "react-router-dom";
import SearchByOrder from "./SearchByOrder";
import Username from "../Features/user/Username";

function Navbar() {
  return (
   <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <NavLink to="/" className="tracking-widest">My Random Shop</NavLink>
      <SearchByOrder />
      <Username />
    </header>
  );
}

export default Navbar;
