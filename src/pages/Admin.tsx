import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AdminCard from "../components/AdminCard";
import { useProducts } from "../context/productContext";

function Admin() {
  const { products } = useProducts();

  return (
    <Box py={2}>
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
          <AdminCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}

export default Admin;
