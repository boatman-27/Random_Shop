import UsernameForm from "../Features/user/UsernameForm";
import { useSelector } from "react-redux";
import { getUsername } from "../Features/user/userSlice";
import Button from "./Button";

function Home() {
  const username = useSelector(getUsername);
  return (
    <div className="my-10 px-4 text-center sm:my-16 items-center">
      <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
        The best shop.
        <br />
        <span className="text-yellow-500">
          From our warehouse to you :)
        </span>
      </h1>
      {username ? (
        <Button type="primary" to="menu">Continue Shopping, {username}</Button>
      ) : (
        <UsernameForm />  
      )}
    </div>
  );
}

export default Home;
