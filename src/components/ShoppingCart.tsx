import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ImBin } from "react-icons/im";
import { products } from "../../data";

function ShoppingCart() {
  const product = products[8];
  return (
    <div style={{ paddingTop: "100px", paddingBottom: "100px" }}>
      <Center>
        <Heading as='h3' size='md' p='4'>
          Din varukorg!
        </Heading>
      </Center>

      <Center>
        <Flex>
          <Box bg='white' p='16px' w='1200px' borderRadius='md'>
            <Flex justifyContent='space-between' pt='4px' pb='12px'>
              <Flex alignItems='center' width='100px'>
                <Image src={product.image} />
              </Flex>

              <Flex
                alignItems='center'
                width='90%'
                justifyContent='space-between'
              >
                <Box ml='10px'>
                  <Text>{product.title}</Text>
                  <Text>{product.height}</Text>

                  {/*BUTTONS SECTION*/}
                  <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    border='2px'
                    borderColor='yellow.400'
                    borderRadius='none'
                    w='130px'
                  >
                    <Button
                      data-cy='decrease-quantity-button'
                      bg='white'
                      colorScheme='yellow'
                      _hover={{ bg: "yellow.400" }}
                      borderRadius='none'
                    >
                      -
                    </Button>
                    <Text p='4px'> 2 </Text>
                    <Button
                      data-cy='increase-quantity-button'
                      bg='white'
                      colorScheme='yellow'
                      _hover={{ bg: "yellow.400" }}
                      borderRadius='none'
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Text>Totalt: {product.price} SEK</Text>
                </Box>
              </Flex>

              <ImBin />
            </Flex>

            <Divider orientation='horizontal' />

            <Flex justifyContent='space-between' pt='14px' pb='14px'>
              <Flex alignItems='center' width='100px'>
                <Image src={product.image} />
              </Flex>
              <Flex
                alignItems='center'
                width='90%'
                justifyContent='space-between'
              >
                <Box ml='10px'>
                  <Text>{product.title}</Text>
                  <Text>{product.height}</Text>
                  {/*BUTTONS SECTION*/}
                  <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    border='2px'
                    borderColor='yellow.400'
                    borderRadius='none'
                    w='130px'
                  >
                    <Button
                      data-cy='decrease-quantity-button'
                      bg='white'
                      colorScheme='yellow'
                      _hover={{ bg: "yellow.400" }}
                      borderRadius='none'
                    >
                      -
                    </Button>
                    <Text p='4px'> 2 </Text>
                    <Button
                      data-cy='increase-quantity-button'
                      bg='white'
                      colorScheme='yellow'
                      _hover={{ bg: "yellow.400" }}
                      borderRadius='none'
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Text>Totalt: {product.price} SEK</Text>
                </Box>
              </Flex>
              <ImBin />
            </Flex>

            <Divider orientation='horizontal' />

            <Flex justifyContent='space-between' pt='14px' pb='14px'>
              <Flex alignItems='center' width='100px'>
                <Image src={product.image} />
              </Flex>
              <Flex
                alignItems='center'
                width='90%'
                justifyContent='space-between'
              >
                <Box ml='10px'>
                  <Text>{product.title}</Text>
                  <Text>{product.height}</Text>
                  {/*BUTTONS SECTION*/}
                  <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    border='2px'
                    borderColor='yellow.400'
                    borderRadius='none'
                    w='130px'
                  >
                    <Button
                      data-cy='decrease-quantity-button'
                      bg='white'
                      colorScheme='yellow'
                      _hover={{ bg: "yellow.400" }}
                      borderRadius='none'
                    >
                      -
                    </Button>
                    <Text p='4px'> 2 </Text>
                    <Button
                      data-cy='increase-quantity-button'
                      bg='white'
                      colorScheme='yellow'
                      _hover={{ bg: "yellow.400" }}
                      borderRadius='none'
                    >
                      +
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <Text>Totalt: {product.price} SEK</Text>
                </Box>
              </Flex>
              <ImBin />
            </Flex>

            <Divider orientation='horizontal' />

            <Flex fontSize='32px' pt='10px' justifyContent='space-between'>
              <Text data-cy='total-price'> Total:</Text>
              <Text>600 SEK</Text>
            </Flex>
          </Box>
        </Flex>
      </Center>
    </div>
  );
}

export default ShoppingCart;
