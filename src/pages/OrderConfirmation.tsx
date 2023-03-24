import { Box, Center, Heading, Text } from "@chakra-ui/react";
import OrderCard from "../components/OrderCard";
import { useCart } from "../context/cartContext";
import { useOrder } from "../context/orderContext";

function OrderConfirmation() {
  const { order } = useOrder();

  return (
    <Center w='100%' flexDirection='column' py={6}>
      <Box py={8}>
        <Heading fontSize='1.5rem'>Tack för din beställning!</Heading>
      </Box>
      <Box
        w='40%'
        borderBottom='1px'
        borderColor='blackAlpha.200'
        pt={6}
        pb={2}
      >
        <Text fontSize='1.1rem'>Ordernummer: {order?.id}</Text>
      </Box>
      {order?.cart.map((cartItem) => (
        <Box key={cartItem.id} w='100%'>
          <Center>
            <OrderCard cart={[cartItem]} />
          </Center>
        </Box>
      ))}
      <Box w='40%' textAlign='right'>
        <Text fontSize='1.1rem'>Totalt: 1000 SEK</Text>
      </Box>
      <Box pt={4}>
        <Text>Dina uppgifter</Text>
      </Box>
    </Center>
  );
}

export default OrderConfirmation;
