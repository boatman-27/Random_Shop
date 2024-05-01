import { formatCurrency } from "../../helpers/FormatCurrency";
import DeleteItem from "../../CommonUI/DeleteItem";
import UpdateCartQuantity from "./UpdateCartQuantity";

function CartItem({ item }) {
  const { id, title, price, image, quantity } = item;

  return (
    <li className="">
      <div className="flex justify-between gap-4">
        <div className="flex items-center">
          <p>{quantity}x</p>
          <div className="ml-4">
            <p className="font-semibold">{title}</p>
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center gap-3">
          <p className="text-sm font-bold">{formatCurrency(price)}</p>
          <UpdateCartQuantity id={id} quantity={quantity} />
          <DeleteItem id={id} />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
