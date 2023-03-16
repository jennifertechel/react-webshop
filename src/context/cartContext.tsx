import { createContext, useContext, useState, PropsWithChildren } from "react";

interface VadSkaViSkickaÖverKontexten {
  cart: string[];
}

const CartContext = createContext<VadSkaViSkickaÖverKontexten>(null as any);
export const useCart = () => useContext(CartContext);

export default function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useState<string[]>([]);

  return (
    <CartContext.Provider value={{ cart }}>
      {props.children}
    </CartContext.Provider>
  );
}
