import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";


const CustomerSchema = Yup.object().shape({
    name: Yup.string().min(2).required("Required"),
    address: Yup.string().min(2).required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    //phone: Yup.string().phone( "SE", "Invalid phone").required("Required"),
    
});

type CustomerValues = Yup.InferType<typeof CustomerSchema>;

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
        validationSchema: CustomerSchema,
        onSubmit: (values) => {
        },
    });
    
    return (
        <div>
            <Center>
                <Heading  as='h3' size='md' p="4">Dina uppgifter</Heading> 
            </Center>
            <Center>
            <Flex bg="white" p="18px"  w="1200px" borderRadius='md'>
                <Box justifyContent="center" maxW="480px" bg="green.200">
                    <FormControl>
                        <FormLabel>Name:</FormLabel>
                        <Input 
                            type="text" 
                            name="name" 
                            id="name" 
                            value={formik.values.name} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                        /> 
                        {formik.touched.name && formik.errors.name && (<Text color="red">{formik.errors.name}</Text>)}
                    </FormControl>

                    <FormControl>
                        <FormLabel>Address:</FormLabel>
                        <Input 
                            type="text" 
                            name="address" 
                            id="address" 
                            value={formik.values.address} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                        /> 
                        {formik.touched.address && formik.errors.address && (<Text color="red">{formik.errors.address}</Text>)}
                    </FormControl>

                    <FormControl>
                        <FormLabel>Zipcode:</FormLabel>
                        <Input 
                            type="text" 
                            name="zipcode"
                            id="zipcode" 
                            value={formik.values.zipcode} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                        /> 
                        {formik.touched.zipcode && formik.errors.zipcode && (<Text color="red">{formik.errors.zipcode}</Text>)}
                    </FormControl>

                    <FormControl>
                        <FormLabel>City:</FormLabel>
                        <Input 
                            type="text" 
                            name="city" 
                            id="city" 
                            value={formik.values.city} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                        /> 
                        {formik.touched.city && formik.errors.city && (<Text color="red">{formik.errors.city}</Text>)}
                    </FormControl>
                    
                    <FormControl>
                        <FormLabel>Email:</FormLabel>
                        <Input 
                            type="text" 
                            name="email"
                            id="email" 
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                        /> 
                        {formik.touched.email && formik.errors.email && (<Text color="red">{formik.errors.email}</Text>)}
                    </FormControl>

                    <FormControl>
                        <FormLabel>Phone:</FormLabel>
                        <Input 
                            type="text" 
                            name="phone"
                            id="phone" 
                            value={formik.values.phone} 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} 
                        /> 
                        {formik.touched.phone && formik.errors.phone && (<Text color="red">{formik.errors.phone}</Text>)}
    
                        <Button>Fortsätt</Button>
                    </FormControl>
                </Box>
            </Flex>
            </Center>
        </div>
    );
}

export default CustomerForm;