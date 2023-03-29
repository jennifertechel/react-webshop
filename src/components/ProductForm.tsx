import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input, Stack,
  Text
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
    onSubmit: (values) => {
      onSubmit(values);
      navigate("/admin");
    }
      });

  return (
    <form onSubmit={formik.handleSubmit} data-cy='product-form'>
      <Center>
        <Box>
          <Flex
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Stack spacing={6}>
              <FormControl>
                <FormLabel>Titel:</FormLabel>
                <Input
                  data-cy='product-title'
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
                  <Text color='red' fontSize='xs' data-cy='product-title-error'>
                    {formik.errors.title}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Beskrivning:</FormLabel>
                <Input
                  data-cy='product-description'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='description'
                  id='description'
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.description && formik.errors.description && (
                  <Text
                    data-cy='customer-description-error'
                    fontSize='xs'
                    color='red'
                  >
                    {formik.errors.description}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Höjd:</FormLabel>
                <Input
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='height'
                  id='height'
                  value={formik.values.height}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.height && formik.errors.height && (
                  <Text color='red' fontSize='xs'>
                    {formik.errors.height}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Pris:</FormLabel>
                <Input
                  data-cy='product-price'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='price'
                  id='price'
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price && (
                  <Text
                    data-cy='customer-price-error'
                    fontSize='xs'
                    color='red'
                  >
                    {formik.errors.price}
                  </Text>
                )}
              </FormControl>

              <FormControl>
                <FormLabel>Bild URL:</FormLabel>
                <Input
                  data-cy='product-image'
                  bg='whiteAlpha.900'
                  size='md'
                  type='text'
                  name='image'
                  id='image'
                  value={formik.values.image}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.image && formik.errors.image && (
                  <Text
                    data-cy='customer-image-error'
                    fontSize='xs'
                    color='red'
                  >
                    {formik.errors.image}
                  </Text>
                )}
              </FormControl>

              <Center>
                <Box py={4}>
                  <Button 
                    variant='outline'
                    borderColor='yellow.400'
                    color='black'
                    borderRadius='none'
                    borderWidth='1px'
                    py={4}
                    _hover={{ bg: "yellow.400" }}
                    m={{ base: "10px", sm: "2px" }}
                    type='submit'
                  >
                    Spara
                  </Button>

                  <Button
                    variant='outline'
                    borderColor='yellow.400'
                    color='black'
                    borderRadius='none'
                    borderWidth='1px'
                    py={4}
                    _hover={{ bg: "yellow.400" }}
                    m={{ base: "10px", sm: "2px" }}
                  >
                    Avbryt
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
