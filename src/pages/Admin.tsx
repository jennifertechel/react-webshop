import { Heading } from "@chakra-ui/react";
import AdminCard from "../components/AdminCard";

function Admin() {
  return (
    <>
      <Heading as="h2" size="lg" mt={3}>
        Admin
      </Heading>
      <AdminCard />
    </>
  );
}

export default Admin;
