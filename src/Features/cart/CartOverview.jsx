import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalQuantity, getTotalAmount } from "../cart/cartSlice";
import { formatCurrency } from "../../helpers/FormatCurrency";

function CartOverview() {
  const quantity = useSelector(getTotalQuantity);
  const amount = useSelector(getTotalAmount);

  if (quantity === 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <span className="flex flex-row gap-2">
        <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
          <span>{quantity}</span> Item(s)
        </p>
        <p>Total: {formatCurrency(amount)}</p>
      </span>
      <Link
        to="/cart"
        className="rounded-full bg-stone-600 px-4 py-2 hover:bg-stone-500"
      >
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
