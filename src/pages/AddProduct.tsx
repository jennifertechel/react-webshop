import { Box, Center, Heading } from "@chakra-ui/react";

import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/productContext";

function AddProduct() {
  const { addNewProduct } = useProducts();

  return (
    <Center>
      <Box>
        <Center>
          <Heading as='h2' size='lg' mt={4}>
            Kul med en ny produktmedlem! 🥰
          </Heading>
        </Center>
        <ProductForm onSubmit={addNewProduct} />
      </Box>
    </Center>
  );
}

export default AddProduct;
