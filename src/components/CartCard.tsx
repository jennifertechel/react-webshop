import {
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  Box,
  Button,
  Icon,
  Stack,
  Center,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { Product } from "../../data";
import { AiOutlineDelete } from "react-icons/ai";

function CartCard({ product }: { product: Product }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow='hidden'
      size='sm'
      bg='brand.100'
      w='80%'
      variant='unstyled'
      my={2}
    >
      <Box>
        <Image
          src={product.image}
          alt={product.title}
          maxW='160px'
          maxH='100%'
          m={2}
        />
      </Box>
      <CardBody pt={8}>
        <Flex justifyContent='space-between'>
          <Box pl={4}>
            <Text fontSize='xl'>{product.title} vas</Text>
            <Text fontSize='sm'>
              Höjd: &nbsp;
              {product.height}
            </Text>
            <Flex
              justifyContent='center'
              alignItems='center'
              border='1px solid'
              borderColor='yellow.400'
              p={0}
              m={0}
            >
              <Button bg='none' borderRadius='none'>
                -
              </Button>
              <Text px={3}>2</Text>
              <Button bg='none' borderRadius='none'>
                +
              </Button>
            </Flex>
          </Box>
          <Spacer />
          <Box pr={4}>
            <Button bg='none'>
              <Icon boxSize={6} as={AiOutlineDelete} />
            </Button>
            <Text>
              x {product.price}{" "}
              <Text as='span' fontSize='xs'>
                &nbsp;SEK
              </Text>
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default CartCard;
