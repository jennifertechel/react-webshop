import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import { Field, Form, Formik, useFormik } from "formik";
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
  image: Yup.mixed().required("Vänligen lägg till en bild") 
}) 

export type ProductValues = Yup.InferType<typeof ProductSchema>; 
 
function ProductForm({ product }: ProductFormProps) {
  const initialValues = {
    title: product?.title || "",
    description: product?.description || "",
    price: product?.price || "",
    image: product?.image || "",
  };

   const formik = useFormik({ 
    initialValues: { 
      title: "", 
      description: "", 
      price: "", 
      image: "", 
    }, 

    validationSchema: ProductSchema, 
    onSubmit: (values) => { 

    }, 
  }); 

  const onSubmit = (values: any, actions: any) => {
    // Hantera när Spara klickas
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={ProductSchema}>
      {({ isSubmitting }) => (
        <Form data-cy="product-form" onSubmit={formik.handleSubmit}>
          <Center>
            <Box p="28px" w="50rem" pt="5rem" pb="5rem" borderRadius="md">
              <FormControl>
                <FormLabel htmlFor="title">Produktnamn: </FormLabel>
                <Field 
                  id="title" 
                  name="title" 
                  as={Input} 
                  bg="white"
                  value={formik.values.title} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                /> 
                {formik.touched.title && formik.errors.title && ( 
                  <Text data-cy="product-title-error" color='red'> 
                    {formik.errors.title} 
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
                  value={formik.values.description} 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur} 
                /> 
                {formik.touched.description && formik.errors.description && ( 
                  <Text data-cy="product-description-error" color='red'> 
                    {formik.errors.description} 
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
                  value={formik.values.price} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} 
                  />                   
                  {formik.touched.price && formik.errors.price && ( 
                    <Text data-cy="product-price-error" color='red'> 
                      {formik.errors.price} 
                    </Text> 
                  )}  
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="image">Bild</FormLabel>
                <Field 
                  id="image" 
                  name="image">
                  {({ form, field }: { form: any; field: any }) => (
                    <Input
                      id="image"
                      name="image"
                      type="file"
                      onChange={(event: any) => {
                      form.setFieldValue(field.name, event.target.files[0]);
                      formik.handleChange(event); 
                      }} 
                      onBlur={formik.handleBlur}                                        
                    />
                  )}
                </Field>
                {formik.touched.image && formik.errors.image && ( 
                    <Text data-cy="product-image-error" color='red'> 
                       {formik.errors.image} 
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
