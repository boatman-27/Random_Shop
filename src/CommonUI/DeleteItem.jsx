import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeItem } from "../Features/cart/cartSlice";

function DeleteItem({ id }) {
  const dispatch = useDispatch();
  return (
    <Button type="small" onClick={() => dispatch(removeItem(id))}>
      Delete Item
    </Button>
  );
}

export default DeleteItem;
