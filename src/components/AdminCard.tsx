import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useProducts } from "../context/productContext";
import AlertDialogDelete from "./AlertDialog";

function AdminCard() {
  const { products, deleteProduct } = useProducts();
  return (
    <Center>
      <Box w="50%">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          mb={4}
          borderBottom="1px solid black"
        >
          <Heading as="h5" size="sm">
            Alla produkter
          </Heading>
          <Button
            data-cy="admin-add-product"
            colorScheme="yellow"
            bg="base.100"
            borderColor="yellow.400"
            color="black"
            borderRadius="none"
            borderWidth="1.5px"
            variant="solid"
            size="sm"
            w="13rem"
            mb={5}
            h="3rem"
            _hover={{ bg: "orange.100" }}
          >
            Lägg till ny produkt
          </Button>
        </Flex>
        <Stack spacing={6} w="100%">
          {products.map((product) => (
            <Card
              data-cy="product"
              key={product.id}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              bg="brand.100"
              variant="unstyled"
              my={2}
              borderBottom="1px"
              borderColor="blackAlpha.200"
              pb={4}
              borderRadius="0"
            >
              <Flex direction={{ base: "column", md: "row" }} flex="1">
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", md: "200px" }}
                  w="auto"
                  src={product.image}
                  alt={product.title}
                />

                <Stack
                  p={4}
                  justifyContent="space-between"
                  alignItems="stretch"
                  flex="1"
                >
                  <Flex direction="row">
                    <Box>
                      <Heading data-cy="product-title" as="h3" size="md" mb={2}>
                        {product.title}
                      </Heading>
                      <Flex>
                        <Text>Id: </Text>
                        <Text data-cy="product-id" mb={4}>
                          {product.id}
                        </Text>
                      </Flex>
                      <Flex>
                        <Text>Höjd: </Text>
                        <Text mb={4}>{product.height}</Text>
                      </Flex>
                      <Flex>
                        <Text>Pris: </Text>
                        <Text data-cy="product-price" mb={4}>
                          {product.price}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Stack>
                <Box mt="5">
                  <Flex
                    justifyContent="space-evenly"
                    alignItems="flex-end"
                    direction={{ base: "row", md: "column" }}
                  >
                    <Link to="/edit">
                      <Icon
                        bg="base.100"
                        color="black"
                        borderRadius="none"
                        data-cy="admin-edit-product"
                        boxSize={9}
                        as={AiOutlineEdit}
                        _hover={{ bg: "orange.100" }}
                      />
                    </Link>
                    <AlertDialogDelete productId={product.id} />
                  </Flex>
                </Box>
              </Flex>
            </Card>
          ))}
        </Stack>
      </Box>
    </Center>
  );
}

export default AdminCard;
