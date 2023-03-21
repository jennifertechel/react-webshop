import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Icon,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { CartItem, Product } from "../../data";
import { useCart } from "../context/cartContext";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

function CheckoutCard({ product }: { product: CartItem }) {
  const [quantity, setQuantity] = useLocalStorageState<number>(
    product.quantity,
    "cartQuantity-" + product.id
  );

  const { removeFromCart, updateCartItemQuantity } = useCart();
  const handleRemoveFromCart = (item: Product) => {
    removeFromCart(item.id);
    localStorage.removeItem("cartQuantity-" + item.id);
  };
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItemQuantity(product.id, newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItemQuantity(product.id, newQuantity);
    }
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow='hidden'
      size='sm'
      bg='brand.100'
      w='80%'
      variant='unstyled'
      my={2}
      borderBottom='1px'
      borderColor='blackAlpha.200'
      pb={4}
    >
      <Box>
        <Image
          src={product.image}
          alt={product.title}
          maxW='160px'
          maxH='100%'
          m={2}
        />
      </Box>
      <CardBody py={8}>
        <Flex justifyContent='space-between' h='100%'>
          <Flex pl={4} justifyContent='space-between' flexDirection='column'>
            <Box>
              <Text fontSize='xl'>{product.title} vas</Text>
              <Text fontSize='sm'>
                Höjd: &nbsp;
                {product.height}
              </Text>
            </Box>
            <Flex
              justifyContent='center'
              alignItems='center'
              border='1px solid'
              borderColor='yellow.400'
              p={0}
              m={0}
            >
              <Button
                bg='none'
                borderRadius='none'
                onClick={decrementQuantity}
                _hover={{ bg: "none", transform: "scale(1.2)" }}
              >
                -
              </Button>
              <Text px={3}>{quantity}</Text>
              <Button
                bg='none'
                borderRadius='none'
                onClick={incrementQuantity}
                _hover={{ bg: "none", transform: "scale(1.2)" }}
              >
                +
              </Button>
            </Flex>
          </Flex>
          <Spacer />
          <Flex pr={4} justifyContent='space-between' flexDirection='column'>
            <Button
              bg='none'
              _hover={{ bg: "none", transform: "scale(1.2)" }}
              onClick={() => handleRemoveFromCart(product)}
            >
              <Icon boxSize={6} as={AiOutlineDelete} />
            </Button>
            <Text>
              á {product.price}
              <Text as='span' fontSize='xs'>
                &nbsp;SEK
              </Text>
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default CheckoutCard;
