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
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={product.image}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">The perfect latte</Heading>

            <Text py="2">
              Caffè latte is a coffee beverage of Italian origin made with
              espresso and steamed milk.
            </Text>
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
              Buy Latte
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
}

export default ProductCard;
