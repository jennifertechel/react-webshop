import { Box, Flex, Image, Icon, Badge } from "@chakra-ui/react";
import { BsPerson, BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

function Header() {
  const { cart } = useCart();

  // Calculate total quantity of items in cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Flex
      as='header'
      p={4}
      borderBottom='1px'
      borderColor='blackAlpha.200'
      bg='brand.100'
      position='fixed'
      zIndex='sticky'
      width='100%'
      justifyContent='space-between'
    >
      <Box mx='auto'>
        <Link to='/'>
          <Image src='logo.svg' maxWidth='150px' maxHeight='100%' />
        </Link>
      </Box>
      <Flex alignItems='center'>
        <Link to='admin'>
          <Icon boxSize={8} as={BsPerson} />
        </Link>

        <Link to='checkout'>
          <Box pos='relative'>
            <Icon boxSize={8} as={BsBag} />
            {totalQuantity > 0 && (
              <Badge
                position='absolute'
                top='-10px'
                right='-6px'
                colorScheme='yellow'
                fontSize='0.85rem'
                borderRadius='10px'
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
