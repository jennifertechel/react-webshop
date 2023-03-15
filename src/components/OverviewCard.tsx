import { Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";
import { Product } from "../../data";
import { Link } from "react-router-dom";

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
            <Text>{product.title} vas</Text>
            <Text>
              {product.price}
              <Text as='span' fontSize='xs'>
                &nbsp;SEK
              </Text>
            </Text>
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
}

export default OverviewCard;
