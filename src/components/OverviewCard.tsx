import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Icon,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { Product } from "../../data";
import { useCart } from "../context/cartContext";

function OverviewCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const toast = useToast();

  const handleAddToCart = (item: Product) => {
    addToCart(item);
    toast({
      // Call the useToast hook to show a toast notification
      title: "Product added to cart",
      status: "success",
      duration: 1000,
      isClosable: false,
    });
  };

  return (
    <Card
      data-cy="product"
      variant="unstyled"
      maxW="xs"
      align="center"
      bg="brand.100"
      p={4}
      _hover={{
        boxShadow: "2xl",
      }}
    >
      <CardBody>
        <Link to={"/product/" + product.id} key={product.id}>
          <Image src={product.image} alt={product.title} />
        </Link>
        <Flex justifyContent="space-between" pt={3}>
          <Box>
            <Text data-cy="product-title">{product.title}</Text>
            <Text data-cy="product-price">
              {product.price}
              <Text as="span" fontSize="xs">
                &nbsp;SEK
              </Text>
            </Text>
          </Box>

          <Button
            data-cy="product-buy-button"
            variant="outline"
            colorScheme="orange"
            border="none"
            color="black"
            borderRadius="none"
            onClick={() => handleAddToCart(product)}
            _hover={{ bg: "orange.100" }}
          >
            <Icon boxSize={6} as={IoMdAdd} />
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default OverviewCard;
