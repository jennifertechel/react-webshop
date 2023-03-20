import { Box, Flex, Image, Icon, Spacer } from "@chakra-ui/react";
import { BsPerson, BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Flex
      as='header'
      p={4}
      borderBottom='1px'
      borderColor='blackAlpha.200'
      bg='brand.100'
      position='fixed'
      zIndex='sticky'
      width='100%'
      justifyContent='space-between'
    >
      <Box mx='auto'>
        <Link to='/'>
          <Image src='logo.svg' maxWidth='150px' maxHeight='100%' />
        </Link>
      </Box>
      <Flex alignItems='center'>
        <Link to='admin'>
          <Icon boxSize={8} as={BsPerson} />
        </Link>

        <Link to='checkout'>
          <Icon boxSize={8} as={BsBag} />
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
