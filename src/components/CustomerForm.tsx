import {
    Box, Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CustomerSchema = Yup.object().shape({
    name: Yup.string().min(2, "Namnet måste innehålla minst två tecken").required("Vänlig ange ditt namn"),
    address: Yup.string().min(4, "Adressen måste innehålla minst fyra tecken").required("Vänlig ange din fullständiga adress"),
    email: Yup.string().email("Invalid email").required("Vänligen ange en giltlig emailadress"),
    phone: Yup.string().matches(/^[0-9()+-]*$/,"Invalid phone").required("Vänligen ange ditt telefonnummer"),
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
            phone: "" , 
        },
        validationSchema: CustomerSchema,
        onSubmit: (values) => {
        },
    });
    
    return (
        <div>
            <Center>
                <Heading as="h3" size="md" p="4">Dina uppgifter</Heading> 
            </Center>
            <Center>
                <Flex 
                  bg="white"
                  justifyContent="center" 
                  alignItems="center" 
                  p="28px"  
                  w="1200px"
                  pt="80px"
                  pb="80px"
                  borderRadius="md"
                  >
                    <Box 
                        w="680px" 
                        bg="brand.100" 
                        borderRadius="md" 
                        border="1px" 
                        borderColor="yellow.400"
                        >
                        <Stack m="30px" spacing={6}>
                        <FormControl data-cy="customer-form">
                            <FormLabel>Namn:</FormLabel>
                            <Input
                                data-cy="customer-name"
                                bg="whiteAlpha.900" 
                                size="md"
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
                            <FormLabel>Adress:</FormLabel>
                            <Input
                                data-cy="customer-address"
                                bg="whiteAlpha.900" 
                                size="md" 
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
                            <FormLabel>Postnummer:</FormLabel>
                            <Input
                                data-cy="customer-zipcode"
                                bg="whiteAlpha.900" 
                                size="md" 
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
                            <FormLabel>Stad:</FormLabel>
                            <Input
                                data-cy="customer-city"
                                bg="whiteAlpha.900" 
                                size="md" 
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
                                data-cy="customer-email"
                                bg="whiteAlpha.900" 
                                size="md" 
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
                            <FormLabel>Telefonnummer:</FormLabel>
                            <Input
                                data-cy="customer-phone"
                                bg="whiteAlpha.900" 
                                size="md" 
                                type="text" 
                                name="phone"
                                id="phone" 
                                value={formik.values.phone} 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} 
                            /> 
                            {formik.touched.phone && formik.errors.phone && (<Text color="red">{formik.errors.phone}</Text>)}
                            {/*
                            <Box  pt="20px">
                                <Button colorScheme="yellow" size="md">Slutför betalning</Button>
                            </Box>*/}
                        </FormControl>
                        </Stack>
                    </Box>
                </Flex>
            </Center>
        </div>
    );
}

export default CustomerForm;