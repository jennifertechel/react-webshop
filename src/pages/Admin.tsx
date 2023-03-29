import { Center, Heading } from "@chakra-ui/react";
import AdminCard from "../components/AdminCard";
import { useProducts } from "../context/productContext";

function Admin() {
  const { products } = useProducts();

  return (
    <>
      <Center>
        <Heading as='h2' size='md' mt={7} mb={10}>
          Admin
        </Heading>
      </Center>

      <AdminCard />
    </>
  );
}

export default Admin;
