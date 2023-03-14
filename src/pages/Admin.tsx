import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { products } from "../../data";
import { Currency } from "../components/Currency";

function Admin() {
  const product = products[4];
  return (
    <Stack direction={{ base: "column", md: "row" }} spacing="4">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={product.image}
          alt={product.title}
        />

        <Stack spacing="4">
          <CardBody>
            <Stack divider={<StackDivider />}>
              <Heading size="md">{product.title}</Heading>
            </Stack>
            <p>{product.description}</p>
          </CardBody>

          <CardFooter>
            <Flex justifyContent="flex-end">
              <Stack direction="column" spacing="2">
                <Button bg="#e1dacf" color="black" variant="solid">
                  Edit
                </Button>
                <Button bg="#e1dacf" color="black" variant="outline">
                  Ta bort
                </Button>
              </Stack>
            </Flex>
          </CardFooter>

          <CardFooter mt="4rem">
            <p>{Currency(product.price)}</p>
          </CardFooter>
        </Stack>
      </Card>
    </Stack>
  );
}

export default Admin;
