import { Box, Center, Heading } from "@chakra-ui/react";

import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/productContext";

function AddProduct() {
  const { addNewProduct } = useProducts();

  return (
    // Ändra height till mer responsivt, ex 100vh - footer och header height
    <Box minH='70vh'>
      <Center>
        <Heading size='md' py={14} textTransform='uppercase'>
          Lägg till ny produkt
        </Heading>
      </Center>
      <Center>
        <ProductForm onSubmit={addNewProduct} />
      </Center>
    </Box>
  );
}

export default AddProduct;
