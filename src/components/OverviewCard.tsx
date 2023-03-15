import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Product } from "../../data";

function CardHome({ product }: { product: Product }) {
  return (
    <Card maxW='xs' align='center' bg='brand.100'>
      <CardBody>
        <Image src={product.image} alt={product.title} />
        <Flex justifyContent='space-between' pt={3}>
          <Text data-cy='product-title'>{product.title} vas</Text>
          <Text data-cy='product-price'>{product.price} SEK</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default CardHome;
