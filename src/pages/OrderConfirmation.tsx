import { Box, Center, Stack, Heading } from "@chakra-ui/react";
import OrderCard from "../components/CheckoutCard";
import { useCart } from "../context/cartContext";

function OrderConfirmation() {
  const { cart } = useCart();

  return (
    <Center flexDirection='column' py={6}>
      <Box>
        <Heading fontSize='1.5rem'>Tack för din beställning</Heading>
      </Box>
    </Center>
  );
}

export default OrderConfirmation;
