import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

export type ProductFormProps = {
  onSubmit: (values: any, actions: any) => void;
  product?: {
    title: string;
    description: string;
    price: number;
    image: string;
  };
};

function ProductForm({ product }: ProductFormProps) {
  const initialValues = {
    title: product?.title || "",
    description: product?.description || "",
    price: product?.price || "",
    image: product?.image || "",
  };

  const onSubmit = (values: any, actions: any) => {
    // Hantera när Spara klickas
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Box>
            <FormControl>
              <FormLabel htmlFor="title">Produktnamn: </FormLabel>
              <Field id="title" name="title" as={Input} bg="white" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description">Beskrivning: </FormLabel>
              <Field
                id="description"
                name="description"
                as={Input}
                bg="white"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="price">Pris: </FormLabel>
              <Field id="price" name="price" as={Input} bg="white" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="image">Bild</FormLabel>
              <Field id="image" name="image">
                {({ form, field }: { form: any; field: any }) => (
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    onChange={(event: any) =>
                      form.setFieldValue(field.name, event.target.files[0])
                    }
                  />
                )}
              </Field>
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
        </Form>
      )}
    </Formik>
  );
}

export default ProductForm;
