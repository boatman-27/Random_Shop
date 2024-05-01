import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import OrderItem from "./OrderItem";
import Button from "../../CommonUI/Button";
import {
  getOrder,
  finalizeOrder,
  confirmDelivery,
  clearOrder,
} from "./orderSlice";
import EmptyCart from "../cart/EmptyCart";
import { clearCart } from "../cart/cartSlice";

function Order() {
  const order = useSelector(getOrder);
  const orderId = useParams().orderId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!order) return <EmptyCart />;
  let { orderDelivered, orderFinalised, cart } = order;

  const handleConfirmOrder = () => {
    dispatch(finalizeOrder());
    dispatch(clearCart());
  };

  const handleConfirmDelivery = () => {
    dispatch(confirmDelivery());
    dispatch(clearOrder());
    navigate("/");
  };

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #{orderId} status</h2>
        {!orderFinalised ? null : (
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            Order Finalised
          </span>
        )}
        <div className="flex gap-2">
          <div className="rounded-md bg-gray-200 p-2">
            <p className="text-xs text-gray-700">Order placed</p>
            <p className="text-xs text-gray-700">Order delivered</p>
          </div>
        </div>
      </div>
      <ul className="dive-stone-200 divide-y border-b border-t">
        {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
      </ul>
      <div className="flex justify-center gap-5 py-5">
        {!orderFinalised ? (
          <Button
            type="primary"
            className="w-full"
            onClick={handleConfirmOrder}
          >
            Confirm Order & Pay
          </Button>
        ) : !orderDelivered ? (
          <Button
            type="primary"
            className="w-full"
            onClick={handleConfirmDelivery}
          >
            Confirm Delivery
          </Button>
        ) : null}

        <Button type="secondary" className="w-full" to="/menu">
          Modify Order
        </Button>
      </div>
    </div>
  );
}

export default Order;
