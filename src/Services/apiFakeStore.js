export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

export const addCart = async (cartItem) => {
  const res = await fetch("https://fakestoreapi.com/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartItem),
  });
};

export const createOrder = async (cart) => {
  const res = await fetch("https://fakestoreapi.com/carts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  console.log(data);
  console.log(cart);
  return data;
};

export const fetchCart = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/carts/${id}`);
  const data = await res.json();
  return data;
};
