import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import CheckoutCard from "./CheckoutCard";
import { useCart } from "../context/cartContext";
import { useMemo } from "react";

function ShoppingCart() {
  const { cart } = useCart();
  const totalPrice = useMemo(() => {
    return cart.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
  }, [cart]);

  return (
    <Box py={6}>
      <Center>
        <Heading as='h3' size='md' p='4' textTransform='uppercase'>
          Din varukorg
        </Heading>
      </Center>

      <Box width='100%'>
        {cart.map((item) => (
          <Center>
            <CheckoutCard key={item.id} product={item} />
          </Center>
        ))}
      </Box>

      <Center>
        <Flex pt={3} justifyContent='space-between' w='80%' px={4}>
          <Text>Totalt:</Text>
          <Text data-cy='total-price'>
            {totalPrice}
            <Text as='span' fontSize='xs'>
              &nbsp;SEK
            </Text>
          </Text>
        </Flex>
      </Center>
    </Box>
  );
}

export default ShoppingCart;
