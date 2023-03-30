import { createContext, PropsWithChildren, useContext } from "react";
import type { CartItem, Product } from "../../data";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemQuantity: (itemId: string, newQuantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>(null as any);

export const useCart = () => useContext(CartContext);

export default function CartProvider(props: PropsWithChildren) {
  const [cart, setCart] = useLocalStorageState<CartItem[]>([], "cart");

  const addToCart = (item: Product) => {
    // Kolla om produkten redan finns i kundkorgen
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex === -1) {
      // Om produkten inte finns: Lägg till med 1
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      // Om produkten redan finns: Öka med ett
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    }
    console.log("Item added:", item);
  };

  const removeFromCart = (itemId: string) => {
    // Filter out the item with the given ID from the cart ?
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(updatedCart);
  };

  const updateCartItemQuantity = (itemId: string, newQuantity: number) => {
    const updatedCart = [...cart];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.id === itemId
    );

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity = newQuantity;
      setCart(updatedCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
