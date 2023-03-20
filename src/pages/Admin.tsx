import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { products } from "../../data";
import { Currency } from "../components/Currency";

function Admin() {
  return (
    <Box>
      <Box>Admin</Box>

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
          padding="8px"
          color="#c2a77b"
          variant="link"
          ml="auto"
          mt="50px"
        >
          Lägg till ny produkt
        </Button>
      </Flex>

      <Stack direction="column" spacing="4">
        {products.map((product) => (
          <Card key={product.id} variant="outline" overflow="hidden">
            <Image
              objectFit="cover"
              maxH="300px"
              maxW="300px"
              src={product.image}
              alt={product.title}
              style={{ margin: "auto" }}
            />

            <CardBody>
              <Stack divider={<StackDivider />}>
                <Heading size="md">{product.title}</Heading>
                <Text>{product.description}</Text>
              </Stack>
              <Text fontWeight="bold" fontSize="sm">
                {Currency(product.price)}
              </Text>
            </CardBody>

            <CardFooter>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontWeight="bold" fontSize="lg"></Text>

                <Stack direction="row" spacing="5" ml="60">
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
                  >
                    Ta bort
                  </Button>
                </Stack>
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default Admin;
