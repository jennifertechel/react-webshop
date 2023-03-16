import { Box, Center, Flex, Heading } from "@chakra-ui/react";

function CustomerForm() {
    return (
        <div>
            <Center>
                <Heading  as='h3' size='md' p="4">Dina uppgifter</Heading> 
            </Center>
            <Center>
            <Flex>
                <Box bg="white" p="18px"  w="1200px" borderRadius='md'>

                </Box>
            </Flex>
            </Center>
        </div>
    );
}

export default CustomerForm;