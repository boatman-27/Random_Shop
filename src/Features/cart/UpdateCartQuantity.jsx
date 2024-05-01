import Button from "../../CommonUI/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";

function UpdateCartQuantity({ id, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="mb-4 ml-4 mt-2 flex items-center gap-4">
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
      <span>{quantity}</span>
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
    </div>
  );
}

export default UpdateCartQuantity;
