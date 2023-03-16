import { Box, Center, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useFormik } from "formik";


function CustomerForm() {
    const  formik = useFormik({
        initialValues: {
            name: "",
            address: "",
            zipcode: "",
            city: "",
            email: "",
            phone: ""  
        },
        onSubmit: (values) => {

        }
    });
    
    return (
        <div>
            <Center>
                <Heading  as='h3' size='md' p="4">Dina uppgifter</Heading> 
            </Center>
            <Center>
            <Flex bg="white" p="18px"  w="1200px" borderRadius='md'>
                <Box maxW="480px" bg="green.500">
                    <FormControl>
                        <FormLabel>Name:</FormLabel>
                        <Input type="text" name="name" /> 
                    </FormControl>

                    <FormControl>
                        <FormLabel>Address:</FormLabel>
                        <Input type="text" name="address" /> 
                    </FormControl>

                    <FormControl>
                        <FormLabel>Zipcode:</FormLabel>
                        <Input type="text" name="name" /> 
                    </FormControl>

                    <FormControl>
                        <FormLabel>City:</FormLabel>
                        <Input type="text" name="name" />
                    </FormControl>
                    
                    <FormControl>
                        <FormLabel>Email:</FormLabel>
                        <Input type="text" name="name" /> 
                    </FormControl>

                    <FormControl>
                        <FormLabel>Phone:</FormLabel>
                        <Input type="text" name="name" /> 
                    </FormControl>
                </Box>
            </Flex>
            </Center>
        </div>
    );
}

export default CustomerForm;