import { getProducts } from "../../Services/apiFakeStore";
import { useLoaderData } from "react-router-dom";
import { useNavigation } from "react-router-dom";

import Loader from "../../CommonUI/Loader";
import MenuItem from "./MenuItem";

function Menu() {
  const products = useLoaderData();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";
  if (isLoading) {
    console.log("isLoading");
    return <Loader></Loader>;
  }

  return (
    <ul className="space-y-4 divide-y-2 divide-stone-50">
      {products.map((product) => (
        <MenuItem key={product.id} product={product}></MenuItem>
      ))}
    </ul>
  );
}

export async function loader() {
  const products = await getProducts();
  return products;
}

export default Menu;
