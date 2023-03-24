import { createContext, PropsWithChildren, useContext } from "react";
import { Product, products } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface ProductContextProps {
  products: Product[];
  deleteProduct: (productId: string) => void;
}

const ProductContext = createContext<ProductContextProps>({
  products: [],
  deleteProduct: () => {},
});

export const useProducts = () => useContext(ProductContext);

export default function ProductProvider(props: PropsWithChildren) {
  const [productList, setProductList] = useLocalStorageState(
    products,
    "products"
  );

  const deleteProduct = (productId: string) => {
    setProductList(productList.filter((product) => product.id !== productId));
  };

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <ProductContext.Provider value={{ products: productList, deleteProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
}
