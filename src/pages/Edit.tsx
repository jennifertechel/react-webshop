import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/productContext";

function Edit() {
  const { products } = useProducts();
  // const productImage = products[0].image;
  return (
    <Center>
      <Box>
        <Center>
          <Heading as="h2" size="lg" mt={4}>
            Redigera produkt
          </Heading>
        </Center>
        <Flex>
          {/* <Img src={productImage} /> */}
          <ProductForm
            onSubmit={function (values: any, actions: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Flex>
      </Box>
    </Center>
  );
}

export default Edit;
