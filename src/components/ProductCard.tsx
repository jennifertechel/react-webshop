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
import { products } from "../../data";

function ProductCard() {
  const product = products[0];
  return (
    <Flex justifyContent="center" alignItems="center">
      <Card
        maxW="700px"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        boxShadow="none"
        borderRadius="0"
        margin="30px"
        bg="transparent"
      >
        <Flex flex={1}>
          <Image
            objectFit="cover"
            width="100%"
            maxW={{ base: "100%", sm: "100%" }}
            src={product.image}
            alt={product.title}
          />
        </Flex>
        <Flex flex={1}>
          <Stack>
            <CardBody>
              <Heading size="md">{product.title}</Heading>
              <Text>Höjd:{product.height}</Text>

              <Text py="2">{product.description}</Text>

              <Text> {product.price} SEK</Text>
            </CardBody>

            <CardFooter>
              <Button
                variant="outline"
                colorScheme="yellow"
                borderColor="yellow.400"
                color="black"
                borderRadius="none"
                borderWidth="2px"
              >
                Lägg till i varukorgen
              </Button>
            </CardFooter>
          </Stack>
        </Flex>
      </Card>
    </Flex>
  );
}

export default ProductCard;
