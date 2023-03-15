import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Product } from "../../data";

function CardHome({ product }: { product: Product }) {
  return (
    <Link to={"/product/" + product.id} key={product.id}>
      <Card data-cy="product" maxW="xs" align="center" bg="brand.100">
        <CardBody>
          <Image src={product.image} alt={product.title} />
          <Flex justifyContent="space-between" pt={3}>
            <Text>{product.title} vas</Text>
            <Text>{product.price} SEK</Text>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}

export default CardHome;
