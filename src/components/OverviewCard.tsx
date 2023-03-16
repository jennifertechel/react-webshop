import {
  Card,
  CardBody,
  Flex,
  Image,
  Text,
  Box,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Product } from "../../data";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

function OverviewCard({ product }: { product: Product }) {
  return (
    <Link to={"/product/" + product.id} key={product.id}>
      <Card
        data-cy='product'
        variant='unstyled'
        maxW='xs'
        align='center'
        bg='brand.100'
        p={4}
        _hover={{
          boxShadow: "2xl",
        }}
      >
        <CardBody>
          <Image src={product.image} alt={product.title} />
          <Flex justifyContent='space-between' pt={3}>
            <Box>
              <Text>{product.title} vas</Text>
              <Text>
                {product.price}
                <Text as='span' fontSize='xs'>
                  &nbsp;SEK
                </Text>
              </Text>
            </Box>
            <Button
              data-cy='product-buy-button'
              variant='outline'
              colorScheme='orange'
              border='none'
              color='black'
              borderRadius='none'
              _hover={{ bg: "orange.100" }}
            >
              <Icon boxSize={6} as={IoMdAdd} />
            </Button>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}

export default OverviewCard;
