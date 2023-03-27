import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import AlertDialogDelete from "../components/AlertDialog";
import { Currency } from "../components/Currency";
import { useProducts } from "../context/productContext";

function AdminCard() {
  const { products, deleteProduct } = useProducts();
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      size="sm"
      bg="brand.100"
      w="80%"
      variant="unstyled"
      my={2}
      borderBottom="1px"
      borderColor="blackAlpha.200"
      pb={4}
    >
      <Box>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          h="200px"
          color="black"
          fontSize="2xl"
          px="4"
          position="fixed"
          top="0"
          bg="brand.100"
          w="100%"
          zIndex="1"
        >
          <Button
            data-cy="admin-add-product"
            border="1px"
            padding="4px"
            color="#c2a77b"
            variant="link"
            ml="auto"
            mt="50px"
          >
            Lägg till ny produkt
          </Button>
        </Flex>

        <Box mt="100px">
          {products.map((product) => (
            <Card
              data-cy="product"
              key={product.id}
              variant="outline"
              overflow="hidden"
              bg="brand.100"
            >
              <Flex>
                <Image
                  objectFit="cover"
                  maxH="300px"
                  maxW="300px"
                  src={product.image}
                  alt={product.title}
                  style={{ margin: "auto" }}
                />

                <Flex direction="column" justify="center" ml="4">
                  <Heading data-cy="product-title" size="md">
                    {product.title}
                  </Heading>
                  <Text>{product.description}</Text>
                  <Text data-cy="product-id">{product.id}</Text>

                  <Text data-cy="product-price" fontWeight="bold" fontSize="sm">
                    {Currency(product.price)}
                  </Text>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold" fontSize="lg"></Text>
                    <AlertDialogDelete productId={product.id} />

                    <Stack direction="row" spacing="5">
                      <Link to="/edit">
                        <Icon
                          data-cy="admin-edit-product"
                          boxSize={7}
                          as={AiOutlineEdit}
                        />
                      </Link>
                    </Stack>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default AdminCard;
