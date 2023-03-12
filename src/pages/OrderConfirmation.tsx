import { Box, Center } from "@chakra-ui/react";

function OrderConfirmation() {
  return (
    <Center minH="100vh" flexDirection="column">
      <Box
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        padding={{ base: "4", md: "8" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <h1>Tack för din beställning.</h1>
      </Box>

      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        padding={{ base: "4", md: "8" }}
        flexDirection="column"
      >
        <h2>Produkt(er):</h2>
        <h2>Antal:</h2>
        <h2>Pris:</h2>
        <h2>Ordernummer:</h2>
      </Box>
    </Center>
  );
}

export default OrderConfirmation;
