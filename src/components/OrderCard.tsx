import { Box, Card, CardBody, Flex, Image, Text } from "@chakra-ui/react";

function OrderCard() {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow='hidden'
      size='sm'
      bg='brand.100'
      variant='unstyled'
      my={2}
      borderBottom='1px'
      borderColor='blackAlpha.200'
      pb={2}
      w='40%'
    >
      <Box>
        <Image
          src='/public/product-images/p-10.svg'
          maxW='100px'
          maxH='100%'
          m={2}
        />
      </Box>
      <CardBody px={6}>
        <Flex flexDirection='column' justifyContent='center' h='100%'>
          <Text fontSize={18} pb={4}>
            Gaston
          </Text>
          <Text fontSize={14}>Antal: 2 st</Text>
          <Text fontSize={14}>Pris: 500 SEK</Text>
        </Flex>
      </CardBody>
    </Card>
  );
}

export default OrderCard;
