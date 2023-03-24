import { createContext, PropsWithChildren, useContext } from "react";
import { CartItem } from "../../data";
import { CustomerValues } from "../components/CustomerForm";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useCart } from "./cartContext";

interface Order {
  id: string;
  cart: CartItem[];
  formData: CustomerValues;
}

interface OrderContextProps {
  order: Order[];
  handleOrderSubmit: (formData: CustomerValues) => void;
}

const OrderContext = createContext<OrderContextProps>(null as any);

export const useOrder = () => useContext(OrderContext);

export default function OrderProvider(props: PropsWithChildren) {
  const [newOrder, setNewOrder] = useLocalStorageState<Order[]>([], "newOrder");
  const { cart } = useCart();

  const handleOrderSubmit = (formData: CustomerValues) => {
    // Generate a unique ID for the order
    const orderId = Date.now().toString();

    // Create a new order with the form data and add it to the list of orders
    const order: Order = { id: orderId, cart: cart, formData };
    const updatedOrders = [...newOrder, order];
    console.log("New Order:", updatedOrders);

    // Update the context with the new order list
    setNewOrder(updatedOrders);
  };

  return (
    <OrderContext.Provider value={{ order: newOrder, handleOrderSubmit }}>
      {props.children}
    </OrderContext.Provider>
  );
}
