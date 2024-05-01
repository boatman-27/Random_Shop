import { formatCurrency } from "../../helpers/FormatCurrency";

function OrderItem({ item }) {
  return (
    <li>
      <div className="flex justify-between gap-4 py-4">
        <div className="flex items-center">
          <p>{item.quantity}x</p>
          <div className="ml-4">
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm font-bold">{formatCurrency(item.price)}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default OrderItem;
