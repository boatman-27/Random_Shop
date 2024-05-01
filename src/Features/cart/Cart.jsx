import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

import EmptyCart from "./EmptyCart";
import LinkButton from "../../CommonUI/LinkButton";
import CartItem from "./CartItem";
import Button from "../../CommonUI/Button";

function Cart() {
  const cart = useSelector(getCart);
  console.log(cart);
  const dispatch = useDispatch();
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <ul className="mt-3 space-y-3 divide-y-2 divide-stone-200">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className="mt-4 flex justify-center gap-5 py-5">
        <Button type="primary" className="w-full" to="/order/new">
          Checkout
        </Button>
        <Button
          type="secondary"
          className="w-full"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
