import { Badge, Box, Flex, Icon, Image } from "@chakra-ui/react";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

function Header() {
  const { cart } = useCart();

  // Calculate total quantity of items in cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Flex
      as="header"
      p={4}
      borderBottom="1px"
      borderColor="blackAlpha.200"
      bg="brand.100"
      position="fixed"
      zIndex="sticky"
      width="100%"
      justifyContent="space-between"
    >
      <Box mx="auto">
        <Link to="/">
          <Image src="logo.svg" maxWidth="150px" maxHeight="100%" />
        </Link>
      </Box>
      <Flex alignItems="center">
        <Link to="admin" data-cy="admin-link">
          <Icon boxSize={7} as={IoPersonOutline} />
        </Link>
        <Link to="checkout" data-cy="cart-link">
          <Box pos="relative">
            <Icon boxSize={7} as={IoBagOutline} />
            {totalQuantity > 0 && (
              <Badge
                position="absolute"
                top="-10px"
                right="-6px"
                colorScheme="yellow"
                bg="yellow.400"
                fontSize="0.85rem"
                borderRadius="10px"
                data-cy="cart-items-count-badge"
              >
                {totalQuantity}
              </Badge>
            )}
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
