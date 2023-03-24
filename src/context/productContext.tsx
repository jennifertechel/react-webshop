import { createContext, PropsWithChildren, useContext } from "react";
import { products, Product } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface ProductContextProps {
  products: Product[];
}

const ProductContext = createContext<ProductContextProps>(null as any);

export const useProducts = () => useContext(ProductContext);

export default function ProductProvider(props: PropsWithChildren) {
  const [productList, setProductList] = useLocalStorageState(
    products,
    "products"
  );

  return (
    <ProductContext.Provider value={{ products: productList }}>
      {props.children}
    </ProductContext.Provider>
  );
}
