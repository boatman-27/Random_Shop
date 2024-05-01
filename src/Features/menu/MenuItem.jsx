import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Button from "../../CommonUI/Button";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";

import { shrinkText } from "../../helpers/FormatText";
import { formatCurrency } from "../../helpers/FormatCurrency";
import { addItem, getCart, getCurrentQuantity } from "../cart/cartSlice";
import DeleteItem from "../../CommonUI/DeleteItem";

function MenuItem({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        image,
        quantity: 1,
        totalItemPrice: price * 1,
      }),
    );
  };
  const { id, title, price, image, description, quantity } = product;
  const currentQuantity = useSelector(getCurrentQuantity(id)) || 0;
  const [shrink, setShrink] = useState(true);
  const isAdded = cart.some((item) => item.id === id);

  const toggleShrink = () => {
    setShrink(!shrink);
  };

  return (
    <li className="relative my-3 flex gap-4 py-2">
      <div className="flex-shrink-0">
        <img src={image} alt={title} className="h-auto w-24" />
      </div>
      <div className="flex flex-grow flex-col">
        <p className="font-medium">{title}</p>
        <div className="rounded-lg p-2">
          <p className="text-sm text-gray-700" onClick={toggleShrink}>
            {shrink ? shrinkText(description) : description}
          </p>
        </div>
        <p className="text-sm">{formatCurrency(price)}</p>
      </div>
      <div className="flex-shrink-0">
        <div className="flex flex-col items-center">
          <div className="h-12">
            {!isAdded ? (
              <Button type="primary" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <DeleteItem id={id} />
                <UpdateCartQuantity id={id} quantity={currentQuantity} />
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
