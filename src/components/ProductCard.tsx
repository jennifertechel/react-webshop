import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Product } from "../../data";
import { Currency } from "./Currency";
import { useCart } from "../context/cartContext";

function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (item: Product) => {
    addToCart(item);
  };
  return (
    <Flex justifyContent='center' alignItems='center'>
      <Card
        maxW='800px'
        direction={{ base: "column", sm: "row" }}
        overflow='hidden'
        boxShadow='none'
        borderRadius='0'
        margin='30px'
        bg='transparent'
      >
        <Flex flex={1}>
          <Image
            objectFit='cover'
            width='100%'
            maxW={{ base: "100%", sm: "100%" }}
            minW='200px'
            src={product.image}
            alt={product.title}
          />
        </Flex>
        <Flex flex={1} alignItems='center' justifyContent='space-between'>
          <Stack maxW='450px' spacing='5px'>
            <CardBody>
              <Heading
                data-cy='product-title'
                margin='3px 10px 10px 10px'
                fontSize='xl'
              >
                {product.title}
              </Heading>
              <Text margin='3px 10px 10px 10px'>Höjd:{product.height}</Text>

              <Text
                data-cy='product-description'
                margin='3px 10px 10px 10px'
                py='2'
              >
                {product.description}
              </Text>

              <Text
                data-cy='product-price'
                fontSize='xl'
                margin='3px 10px 10px 10px'
              >
                {Currency(product.price)}
              </Text>
            </CardBody>

            <CardFooter flexDirection={{ base: "column", md: "row" }}>
              <Button
                onClick={() => handleAddToCart(product)}
                data-cy='product-buy-button'
                variant='outline'
                colorScheme='yellow'
                borderColor='yellow.400'
                color='black'
                borderRadius='none'
                borderWidth='2px'
                mr='2'
                height='45px'
                _hover={{ bg: "yellow.400" }}
                m={{ base: "10px", sm: "2px" }}
              >
                Lägg till i varukorgen
              </Button>
              {/* <Box
                borderWidth="2px"
                borderColor="yellow.400"
                borderRadius="none"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="140px"
                height="45px"
                m={{ base: "10px", sm: "2px" }}
              >
                <Button
                  bg="transparent"
                  colorScheme="yellow"
                  borderColor="transparent"
                  borderWidth="2px"
                  borderRadius="none"
                  _hover={{ bg: "yellow.400" }}
                  height="45px"
                >
                  -
                </Button>
                <Text mx="2">0</Text>
                <Button
                  borderColor="transparent"
                  bg="transparent"
                  borderWidth="2px"
                  borderRadius="none"
                  _hover={{ bg: "yellow.400" }}
                  height="45px"
                >
                  +
                </Button>
              </Box> */}
            </CardFooter>
          </Stack>
        </Flex>
      </Card>
    </Flex>
  );
}

export default ProductCard;
