import { useState } from "react";
import { updateUsername } from "./userSlice";
import { useDispatch } from "react-redux";
import Button from "../../CommonUI/Button";
import { useNavigate } from "react-router";

function UsernameForm() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUsername(username));
    navigate("/menu");
  }
  
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Your Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-full w-72 placeholder:text-center"
        />
      </div>
      <div className="mt-4">
        {username && (
          <Button type="primary" onClick={handleSubmit}>
            Continue Shopping
          </Button>
        )}
      </div>
    </form>
  );
}

export default UsernameForm;
