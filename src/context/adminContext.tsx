import { useState } from "react";
import { products } from "../../data";

function AdminContext() {
  const [productList, setProductList] = useState(products);
}
