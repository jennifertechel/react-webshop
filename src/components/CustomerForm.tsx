import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Form, Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useOrder } from "../context/orderContext";

const CustomerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Namnet måste innehålla minst två tecken")
    .required("Vänligen ange ditt namn"),
  address: Yup.string()
    .min(4, "Adressen måste innehålla minst fyra tecken")
    .required("Vänligen ange din fullständiga adress"),
  zipcode: Yup.string()
    .matches(/^[0-9]+$/, "Vänligen ange ett giltigt postnummer")
    .min(5, "Vänligen ange ett giltigt postnummer")
    .max(5, "Vänligen ange ett giltigt postnummer")
    .required("Vänligen ange ett postnummer"),
  city: Yup.string()
    .min(2, "Vänligen ange en stad")
    .required("Vänligen ange en stad"),
  email: Yup.string()
    .email("Vänligen ange en giltig mejladress")
    .required("Vänligen ange din mejladress"),
  phone: Yup.string()
    .matches(/^[0-9()+-]*$/, "Vänligen ange ett giltigt telefonnummer")
    .required("Vänligen ange ditt telefonnummer"),
});

export type CustomerValues = Yup.InferType<typeof CustomerSchema>;

function CustomerForm() {
  const { handleOrderSubmit } = useOrder();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      zipcode: "",
      city: "",
      email: "",
      phone: "",
    },
    validationSchema: CustomerSchema,
    onSubmit: (values) => {
      handleOrderSubmit(values);
      navigate("/confirmation");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} data-cy='customer-form'>
      <Center>
        <Heading as='h3' size='md' p='4' textTransform='uppercase'>
          Dina uppgifter
        </Heading>
      </Center>
      <Center>
        <Box p='28px' w='75rem' pt='5rem' pb='5rem' borderRadius='md'>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            bg='brand.100'
            borderRadius='md'
            border='1px'
            borderColor='yellow.400'
          >
            <Stack m='30px' spacing={6}>
              <FormControl>
                <FormLabel>Namn:</FormLabel>
                <Input
                  data-cy='customer-name'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='name'
                  id='name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <Text data-cy='customer-name-error' color='red'>
                    {formik.errors.name}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Adress:</FormLabel>
                <Input
                  data-cy='customer-address'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='address'
                  id='address'
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.address && formik.errors.address && (
                  <Text data-cy='customer-address-error' color='red'>
                    {formik.errors.address}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Postnummer:</FormLabel>
                <Input
                  data-cy='customer-zipcode'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='zipcode'
                  id='zipcode'
                  value={formik.values.zipcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.zipcode && formik.errors.zipcode && (
                  <Text data-cy='customer-zipcode-error' color='red'>
                    {formik.errors.zipcode}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Stad:</FormLabel>
                <Input
                  data-cy='customer-city'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='city'
                  id='city'
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.city && formik.errors.city && (
                  <Text data-cy='customer-city-error' color='red'>
                    {formik.errors.city}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Email:</FormLabel>
                <Input
                  data-cy='customer-email'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='email'
                  id='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <Text data-cy='customer-email-error' color='red'>
                    {formik.errors.email}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Telefonnummer:</FormLabel>
                <Input
                  data-cy='customer-phone'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='phone'
                  id='phone'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <Text data-cy='customer-phone-error' color='red'>
                    {formik.errors.phone}
                  </Text>
                )}
                <Center>
                  <Box pt='1.5rem'>
                    <Button colorScheme='yellow' size='md' type='submit'>
                      Slutför beställning
                    </Button>
                  </Box>
                </Center>
              </FormControl>
            </Stack>
          </Flex>
        </Box>
      </Center>
    </Form>
  );
}

export default CustomerForm;
