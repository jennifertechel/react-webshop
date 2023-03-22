import { createContext, PropsWithChildren, useContext, useEffect } from "react";
import { products } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  height: string;
}

interface ProductContextProps {
  products: Product[];
}

const ProductContext = createContext<ProductContextProps>({
  products: [],
});

export const useProducts = () => useContext(ProductContext);

export default function ProductProvider(props: PropsWithChildren) {
  const [productList, setProductList] = useLocalStorageState(
    products,
    "products"
  );

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <ProductContext.Provider value={{ products: productList }}>
      {props.children}
    </ProductContext.Provider>
  );
}
