import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Currency } from "../components/Currency";
import { useProducts } from "../context/productContext";

function Admin() {
  const { products, deleteProduct } = useProducts();

  // const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

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
          <Card key={product.id} variant="outline" overflow="hidden">
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
                <Heading size="md">{product.title}</Heading>
                <Text>{product.description}</Text>
                <Text fontWeight="bold" fontSize="sm">
                  {Currency(product.price)}
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontWeight="bold" fontSize="lg"></Text>

                  <Stack direction="row" spacing="5">
                    <Button
                      border="1px"
                      padding="8px"
                      color="#c2a77b"
                      variant="link"
                    >
                      Redigera
                    </Button>
                    <Button
                      border="1px"
                      padding="8px"
                      color="#c2a77b"
                      variant="link"
                      data-cy="admin-remove-product"
                      onClick={() => deleteProduct(product.id)}
                      // onClick={() => setIsDeleteDialogOpen(true)}
                    >
                      Ta bort
                    </Button>
                    {/* <MyAlertDialog
                      isOpen={isDeleteDialogOpen}
                      onClose={() => setIsDeleteDialogOpen(false)}
                      title="Ta bort"
                      message="Är du säker på att du vill ta bort produkten?"
                      onConfirm={() => {
                        deleteProduct(product.id);
                        setIsDeleteDialogOpen(false);
                      }}
                      confirmButtonText="Ta bort"
                    /> */}
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
