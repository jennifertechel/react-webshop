import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Product } from "../../data";

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Vänligen ange ett produktnamn"),
  description: Yup.string().required("Vänligen ange en beskrivning"),
  price: Yup.number().required("Vänligen ange ett pris"),
  image: Yup.string().required("Vänligen lägg till en bild"),
});

interface Props {
  product?: Product;
  onSubmit: (product: Product) => void;
}

function ProductForm({ product, onSubmit }: Props) {
  const formik = useFormik<Product>({
    initialValues: product || {
      id: Date.now().toString(),
      title: "",
      description: "",
      price: "" as any,
      image: "",
      height: "",
    },
    validationSchema: ProductSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} data-cy='product-form'>
      <Center>
        <Box>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            border='1px'
            borderColor='yellow.400'
          >
            <Stack spacing={6}>
              <FormControl>
                <FormLabel>Namn:</FormLabel>
                <Input
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='title'
                  id='title'
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.title && formik.errors.title && (
                  <Text color='red' data-cy='product-title-error'>
                    {formik.errors.title}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Beskrivning:</FormLabel>
                <Input
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='address'
                  id='address'
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description && (
                  <Text data-cy='customer-description-error' color='red'>
                    {formik.errors.description}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Pris:</FormLabel>
                <Input
                  data-cy='customer-zipcode'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='zipcode'
                  id='zipcode'
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price && (
                  <Text data-cy='customer-price-error' color='red'>
                    {formik.errors.price}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Bild URL:</FormLabel>
                <Input
                  data-cy='customer-city'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='city'
                  id='city'
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.image && formik.errors.image && (
                  <Text data-cy='customer-image-error' color='red'>
                    {formik.errors.image}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Höjd:</FormLabel>
                <Input
                  data-cy='customer-email'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='email'
                  id='email'
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.height && formik.errors.height && (
                  <Text color='red'>{formik.errors.height}</Text>
                )}
              </FormControl>

              <Center>
                <Box pt='1.5rem'>
                  <Button colorScheme='yellow' size='md' type='submit'>
                    Spara
                  </Button>
                </Box>
              </Center>
            </Stack>
          </Flex>
        </Box>
      </Center>
    </form>
  );
}

export default ProductForm;
