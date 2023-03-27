import { Box, Center, Heading } from "@chakra-ui/react";

import ProductForm from "../components/ProductForm";

function AddProduct() {
  const handleSubmit = (values: any, actions: any) => {
    // Hur vi ska hantera Spara ska läggas här
  };

  return (
    <Center>
      <Box>
        <Center>
          <Heading as="h2" size="lg" mt={4}>
            Kul med en ny produktmedlem! 🥰
          </Heading>
        </Center>
        <ProductForm onSubmit={handleSubmit} />
      </Box>
    </Center>
  );
}

export default AddProduct;
