import { Box, Center, Heading } from "@chakra-ui/react";
import ProductForm from "../components/ProductForm";

function Edit() {
  return (
    <Center>
      <Box>
        <Center>
          <Heading as="h2" size="lg" mt={4}>
            Redigera produkt
          </Heading>
        </Center>
        <ProductForm
          onSubmit={function (values: any, actions: any): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Box>
    </Center>
  );
}

export default Edit;
