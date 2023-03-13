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
  Text,
} from "@chakra-ui/react";
import { products } from "../../data";

function ProductCard() {
  const product = products[0];
  return (
    <Flex justifyContent="center" alignItems="center">
      <Card
        maxW="800px"
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
          <Stack maxW="450px" spacing="10px">
            <CardBody>
              <Heading margin="3px 10px 10px 10px" fontSize="xl">
                {product.title}{" "}
              </Heading>
              <Text margin="3px 10px 10px 10px">Höjd:{product.height}</Text>

              <Text margin="3px 10px 10px 10px" py="2">
                {product.description}
              </Text>

              <Text fontSize="xl" margin="3px 10px 10px 10px">
                {product.price} SEK
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
                mr="2"
                height="50px"
                _hover={{ bg: "yellow.400" }}
              >
                Lägg till i varukorgen
              </Button>
              <Box
                borderWidth="2px"
                borderColor="yellow.400"
                borderRadius="none"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="140px"
              >
                <Button
                  bg="transparent"
                  colorScheme="yellow"
                  borderColor="transparent"
                  borderWidth="2px"
                  borderRadius="none"
                  _hover={{ bg: "yellow.400" }}
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
                >
                  +
                </Button>
              </Box>
            </CardFooter>
          </Stack>
        </Flex>
      </Card>
    </Flex>
  );
}

export default ProductCard;
