import {
  Card,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Product } from "../../data";
import AlertDialogDelete from "../components/AlertDialog";
import { Currency } from "../components/Currency";

function AdminCard({ product }: { product: Product }) {
  return (
    <Card
      data-cy='product'
      key={product.id}
      variant='outline'
      overflow='hidden'
      bg='brand.100'
      mt={2}
    >
      <Flex>
        <Image
          objectFit='cover'
          maxH='300px'
          maxW='300px'
          src={product.image}
          alt={product.title}
          style={{ margin: "auto" }}
        />

        <Flex direction='column' justify='center' ml='4'>
          <Heading data-cy='product-title' size='md'>
            {product.title}
          </Heading>
          <Text>{product.description}</Text>
          <Text data-cy='product-id'>{product.id}</Text>

          <Text data-cy='product-price' fontWeight='bold' fontSize='sm'>
            {Currency(product.price)}
          </Text>
          <Flex justifyContent='space-between' alignItems='center'>
            <Text fontWeight='bold' fontSize='lg'></Text>
            <AlertDialogDelete productId={product.id} />

            <Stack direction='row' spacing='5'>
              <Link to={"product/" + product.id}>
                <Icon
                  data-cy='admin-edit-product'
                  boxSize={7}
                  as={AiOutlineEdit}
                />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default AdminCard;
