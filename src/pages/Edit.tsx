import { Box, Center, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useProducts } from "../context/productContext";
import { useProducts } from "../context/productContext";

function Edit() {
  const { products } = useProducts();
  const params = useParams();
  const editProduct = products.find((product) => product.id === params.id);

  return (
    <Center>
      <Box>
        <Center>
          <Heading as='h2' size='lg' mt={4}>
            Redigera produkt
          </Heading>
        </Center>
        <ProductForm product={editProduct} onSubmit={() => {}} />
      </Box>
    </Center>
  );
}

export default Edit;
