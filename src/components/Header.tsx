import { Center, Flex, Image } from "@chakra-ui/react";

function Header() {
  return (
    <Flex
      as="header"
      p={4}
      borderBottom="1px"
      borderColor="blackAlpha.200"
      bg="brand.100"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
    >
      <Center width="100vw">
        <Image src="logo.svg" maxWidth="150px" maxHeight="100%" />
      </Center>
    </Flex>
  );
}

export default Header;
