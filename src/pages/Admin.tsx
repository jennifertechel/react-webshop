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
import AlertDialogDelete from "../components/AlertDialog";
import { Currency } from "../components/Currency";
import { useProducts } from "../context/productContext";

function Admin() {
  const { products, deleteProduct } = useProducts();

  return (
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
        bg="#fff"
        w="100%"
        zIndex="1"
      >
        <Button
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
                    <Icon
                      data-cy="admin-remove-product"
                      boxSize={7}
                      as={AiOutlineEdit}
                    />
                  </Stack>
                </Flex>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Admin;
