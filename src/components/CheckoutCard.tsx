import {
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  Box,
  Button,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { Product } from "../../data";
import { AiOutlineDelete } from "react-icons/ai";
import { useCart } from "../context/cartContext";

function CartCard({ product }: { product: Product }) {
  const { removeFromCart } = useCart();
  const handleRemoveFromCart = (item: Product) => {
    removeFromCart(item.id);
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
              <Button bg='none' borderRadius='none'>
                -
              </Button>
              <Text px={3}>2</Text>
              <Button bg='none' borderRadius='none'>
                +
              </Button>
            </Flex>
          </Flex>
          <Spacer />
          <Flex pr={4} justifyContent='space-between' flexDirection='column'>
            <Button bg='none' onClick={() => handleRemoveFromCart(product)}>
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

export default CartCard;
