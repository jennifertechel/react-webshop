import {
  Box,
  Button,
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
import AlertDialogDelete from "../components/AlertDialog";
import { Currency } from "../components/Currency";
import { useProducts } from "../context/productContext";
function AdminCard() {
  const { products } = useProducts();
  return (
    <Box bg='brand.900' py={2}>
      <Box maxW='1200px' mx='auto'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Heading color='Black' fontSize='xl'>
            Admin
          </Heading>
          <Link to='product/new'>
            <Button
              data-cy='admin-add-product'
              border='1px'
              padding='4px'
              color='#c2a77b'
              variant='link'
            >
              Lägg till ny produkt
            </Button>
          </Link>
        </Flex>
      </Box>

      <Box maxW='1200px' mx='auto' mt={4}>
        {products.map((product) => (
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
        ))}
      </Box>
    </Box>
  );
}

export default AdminCard;
