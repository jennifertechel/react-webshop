import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export type ProductFormProps = {
  onSubmit: (values: any, actions: any) => void;
  product?: {
    title: string;
    description: string;
    price: number;
    image: string;
  };
};

const ProductSchema = Yup.object().shape({
  title: Yup.string().required("Vänligen ange ett produktnamn"),
  description: Yup.string().required("Vänligen ange en beskrivning"),
  price: Yup.number().required("Vänligen ange ett pris"),
  image: Yup.mixed().required("Vänligen lägg till en bild"),
});

export type ProductValues = Yup.InferType<typeof ProductSchema>;

function ProductForm({ onSubmit, product }: ProductFormProps) {
  const initialValues = {
    title: product?.title || "",
    description: product?.description || "",
    price: product?.price || "",
    image: product?.image || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ProductSchema}
    >
      {({
        isSubmitting,
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
      }) => (
        <Form data-cy="product-form">
          <Center>
            <Box p="28px" w="50rem" pt="5rem" pb="5rem" borderRadius="md">
              <FormControl>
                <FormLabel htmlFor="title">Produktnamn: </FormLabel>
                <Field
                  id="title"
                  name="title"
                  as={Input}
                  bg="white"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.title && errors.title && (
                  <Text data-cy="product-title-error" color="red">
                    {errors.title}
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="description">Beskrivning: </FormLabel>
                <Field
                  id="description"
                  name="description"
                  as={Input}
                  bg="white"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.description && errors.description && (
                  <Text data-cy="product-description-error" color="red">
                    {errors.description}
                  </Text>
                )}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="price">Pris: </FormLabel>
                <Field
                  id="price"
                  name="price"
                  as={Input}
                  bg="white"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.price && errors.price && (
                  <Text data-cy="product-price-error" color="red">
                    {errors.price}
                  </Text>
                )}
              </FormControl>
              <Button
                mt={4}
                colorScheme="yellow"
                isLoading={isSubmitting}
                type="submit"
              >
                Spara
              </Button>
            </Box>
          </Center>
        </Form>
      )}
    </Formik>
  );
}

export default ProductForm;
